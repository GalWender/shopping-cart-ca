import { storageService } from './async-storage.service'

const STORAGE_KEY = 'cart'

export const cartService = {
  query,
  add,
  remove,
}


async function query() {
  return storageService.query(STORAGE_KEY)
}

function add(item) {
  return storageService.post(STORAGE_KEY, item)
}

function remove(itemId) {
  return storageService.remove(STORAGE_KEY, itemId)
}