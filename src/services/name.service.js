import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'itemDB'

export const itemService = {
    query,
    getById,
    save,
    remove,
}

const items = [
    {
        _id: utilService.makeId(),
        title: ''
    }
]


function query(filterBy) {
    return storageService.query(STORAGE_KEY)
        .then((items) => {
            return items
        })
}
function getById(itemId) {
    return storageService.get(STORAGE_KEY, itemId)
}
function remove(itemId) {
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, itemId)
}
function save(item) {
    if (item._id) {
        return storageService.put(STORAGE_KEY, item)
    } else {
        // When switching to backend - remove the next line!
        item.created = Date.now()
        return storageService.post(STORAGE_KEY, item)
    }
}







