import { cartService } from "../../services/cart.service"

const initialState = {
    cart: [],
    loader: false,
}

export function cartReducer(state = initialState, action) {
    var cart
    switch (action.type) {

        case 'SET_CART':
            return { ...state, cart: action.cart }

        case 'ADD_ITEM':
            cart = [action.item, ...state.cart]
            return { ...state, cart }

        case 'REMOVE_ITEM':
            cart = state.cart.filter(item => item.id !== action.itemId)
            return { ...state, cart }

        default:
            return state
    }
}