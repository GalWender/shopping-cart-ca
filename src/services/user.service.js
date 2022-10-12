import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'
const BASE_URL = `user/`

export const userService = {
    updateBalance,
    addActivity,
    setUserClr,
    setUsername,
    getLoggedinUser
}

window.us = userService

// const BASE_URL = `toy/login`


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

// function updateBalance(diff) {
//     const user = getLoggedinUser()
//     user.balance += diff
//     return storageService.put(STORAGE_KEY, user)
//         .then((user) => {
//             sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
//             return user.balance
//         })
// }

// function addActivity(activity){
//     let loggedinUser = getLoggedinUser()
//     loggedinUser.activities.push(activity)
//     return storageService.put(STORAGE_KEY,loggedinUser)
//     .then((user)=>{
//         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN,JSON.stringify(user))
//         return user.activities
//     })
// }

// function setUserClr(clrs) {
//     let loggedinUser = getLoggedinUser()
//     loggedinUser.colors = clrs
//     const elRoot = document.querySelector(':root')
//     for (let i = 0; i < clrs.length; i++) {
//         elRoot.style.setProperty(`--clr${i + 1}`, clrs[i])
//     }
//     return storageService.put(STORAGE_KEY,loggedinUser)
//     .then((user)=>{
//         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN,JSON.stringify(user))
//         return user
//     })
// }

// function setUsername(username) {
//     let loggedinUser = getLoggedinUser()
//     loggedinUser.username = username
//     return storageService.put(STORAGE_KEY,loggedinUser)
//     .then((user)=>{
//         sessionStorage.setItem(STORAGE_KEY_LOGGEDIN,JSON.stringify(user))
//         return user
//     })
// }

