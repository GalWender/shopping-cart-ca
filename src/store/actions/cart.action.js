import { cartService } from "../../services/cart.service"
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'


export function loadCart() {
    return async (dispatch, getState) => {
        // dispatch({ type: 'SET_LOADING', isLoading: true })
        try {
            const cart = await cartService.query()
            dispatch({ type: 'SET_CART', cart })
        } catch (err) {
            showErrorMsg('Failed to load cart')
        } finally {
            // dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

export function addItem(itemToAdd) {
    return async (dispatch, getState) => {
        // dispatch({ type: 'SET_LOADING', isLoading: true })
        try {
            const item = await cartService.add(itemToAdd)
            dispatch({ type: 'ADD_ITEM', item })
        } catch (err) {
            showErrorMsg('Failed to add item try again later')
        } finally {
            // dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}

export function removeItem(itemId) {
    return async (dispatch, getState) => {
        // dispatch({ type: 'SET_LOADING', isLoading: true })
        try {
            await cartService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
            showSuccessMsg('item removed successfully')
        } catch (err) {
            showErrorMsg('Failed to remove item')
        } finally {
            // dispatch({ type: 'SET_LOADING', isLoading: false })
        }
    }
}