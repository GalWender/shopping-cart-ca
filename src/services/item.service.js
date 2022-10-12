// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'

export const itemService = {
    query,
    getById,
}

const gItems = [
    {
        _id: 'a101',
        title: 'Xiaomi Mi 11 Pro',
        imgUrl: 'a101.png',
        price: 200,
    },
    {
        _id: 'a102',
        title: 'iPhone 12',
        imgUrl: 'a102.png',
        price: 250,
    },
    {
        _id: 'a103',
        title: 'Samsung Galaxy A12',
        imgUrl: 'a104.png',
        price: 250,
    },
    {
        _id: 'a104',
        title: 'OnePlus 9 Pro',
        imgUrl: 'oneplus-9-pro.jpg',
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