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
        imgUrl: 'xiaomi-mi-11-pro.jpg',
        price: 200,
    },
    {
        _id: 'a102',
        title: 'Apple iPhone 14 Pro',
        imgUrl: 'apple-iphone-14-pro.jpg',
        price: 250,
    },
    {
        _id: 'a103',
        title: 'Samsung Galaxy S22 Ultra',
        imgUrl: 'samsung-galaxy-s22-ultra.jpg',
        price: 250,
    },
    {
        _id: 'a104',
        title: 'OnePlus 9 Pro',
        imgUrl: 'oneplus-9-pro.jpg',
        price: 250,
    },
    {
        _id: 'a105',
        title: 'Huawei P50 Pro',
        imgUrl: 'huawei-p50-pro.png',
        price: 250,
    },
    {
        _id: 'a106',
        title: 'Google Pixel 6 Pro',
        imgUrl: 'google-pixel-6-pro.jpg',
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