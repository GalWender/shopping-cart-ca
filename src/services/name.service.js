//for http


// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
// import { httpService } from './http.service.js'
// import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG } from './socket.service.js'
// import { getActionAddMsg } from '../store/actions/toy.action.js'
// import {store} from '../store/store'

// // for local storage
// const STORAGE_KEY = 'nameDB'

// export const toyService = {
//     query,
//     getById,
//     save,
//     remove,
// }

// const BASE_URL = `name/`

// /* ?- WebSocket */;
// (() => {
//     socketService.on(SOCKET_EMIT_SEND_MSG, (msg) => {
//       console.log('GOT msg from socket', msg)
//       store.dispatch(getActionAddMsg(msg))
//     })
//     socketService.on(SOCKET_EVENT_ADD_MSG, (msg) => {
//       console.log('GOT msg from socket', msg)
//       store.dispatch(getActionAddMsg(msg))
//     })
//   })()

// function query(filterBy) {
//     console.log(filterBy)
//     return httpService.get(BASE_URL, { params: filterBy })
// }
// function getById(toyId) {
//     return httpService.get(BASE_URL + toyId)
// }
// function remove(toyId) {
//     // return Promise.reject('Not now!');
//     return httpService.delete(BASE_URL + toyId)
// }
// function save(toy) {
//     if (toy._id) {
//         return httpService.put(BASE_URL + toy._id, toy)
//     } else {
//         // When switching to backend - remove the next line!
//         return httpService.post(BASE_URL, toy)
//     }
// }


// for local

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
            //     todos.filter(todo => !todo.isDone) :
            //     (filterBy.category === 'DONE') ?
            //         todos.filter(todo => todo.isDone) : todos
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







