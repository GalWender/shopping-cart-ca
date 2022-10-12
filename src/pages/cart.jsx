import { useSelector } from "react-redux"
import { CartList } from "../cmps/cart-list"

export const Cart = () => {

    const cart = useSelector(state => state.cartModule.cart)

    return <section className="cart">
        <CartList cart={cart}/>
    </section>
}