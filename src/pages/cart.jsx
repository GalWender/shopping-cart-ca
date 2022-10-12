import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartList } from "../cmps/cart-list"
import { loadCart } from "../store/actions/cart.action"

export const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartModule.cart)

    useEffect (()=>{
        dispatch(loadCart())
    },[])

    return <section className="cart">
        <CartList cart={cart}/>
    </section>
}