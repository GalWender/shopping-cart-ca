import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartList } from "../cmps/cart-list"
import { loadCart } from "../store/actions/cart.action"

export const Cart = () => {

    const cart = useSelector(state => state.cartModule.cart)

    useEffect(() => {
    }, [cart])

    return <section className="cart">
        {(cart.length <= 0) ?
            <h1>Cart is empty</h1>
            : <CartList cart={cart} />
        }
    </section>
}