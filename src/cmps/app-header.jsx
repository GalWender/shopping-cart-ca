import { ReactComponent as HouseSvg } from '../assets/svg/house-icon.svg'
import { ReactComponent as CartSvg } from '../assets/svg/cart-icon.svg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../store/actions/cart.action';
import { useEffect } from 'react';
export const AppHeader = () => {
    const cart = useSelector(state => state.cartModule.cart)
    const dispatch = useDispatch()

    useEffect (()=>{
        dispatch(loadCart())
    },[])
    
    const getCartPrice = (cart) => {
        return cart.reduce((acc,item) => {
            return acc + item.price
        },0)
    }

    return <nav className="app-header">
        <div className='main-layout header-container'>
            <NavLink to='/' className="btn btn-svg-house"><HouseSvg /></NavLink>
            <NavLink to='/cart' className="btn btn-checkout">
                <CartSvg className="btn btn-svg-cart"/>
                <p>{cart?.length}</p>
                <p>ITEM(S)</p>
                <p>${getCartPrice(cart)}</p>
            </NavLink>
        </div>
    </nav>
}