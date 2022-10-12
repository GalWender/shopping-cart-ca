import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'toyDB'

export const toyService = {
    query,
    getById,
    save,
    remove,
}


function query(filterBy) {
    return storageService.query(STORAGE_KEY)
        .then((toys) => {
            // toys = (filterBy.category === 'ACTIVE') ?
            //     (filterBy.category === 'DONE') ?
            // if (filterBy.term && filterBy.term !== '') todos = todos.filter(todo => todo.txt.toLowerCase().includes(filterBy.term.toLowerCase()))
            return toys
        })
}
function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        // When switching to backend - remove the next line!
        toy.created = Date.now()
        return storageService.post(STORAGE_KEY, toy)
    }
}







