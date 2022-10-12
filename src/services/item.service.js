import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'itemDB'

export const itemService = {
    query,
    getById,
}

const gItems = [
    {
        _id: 'a101',
        title: 'Xiaomi Redmi Note 10',
        imgUrl: '',
        price: 200,
    },
    {
        _id: 'a102',
        title: 'iPhone 12',
        imgUrl: '',
        price: 250,
    },
    {
        _id: 'a103',
        title: 'Samsung Galaxy A12',
        imgUrl: '',
        price: 250,
    },
]


function query() {
    return Promise.resolve(gItems)
}

function getById(itemId) {
    const item = gItems.find(item => item._id === itemId)
    return Promise.resolve(item)
}