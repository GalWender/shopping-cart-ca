import { ReactComponent as HouseSvg } from '../assets/svg/house-icon.svg'
import { ReactComponent as CartSvg } from '../assets/svg/cart-icon.svg'
import { NavLink } from "react-router-dom";
export const AppHeader = () => {
    return <nav className="app-header">
        <div className='main-layout header-container'>
            <NavLink to='/' className="btn btn-svg-house"><HouseSvg /></NavLink>
            <NavLink to='/cart' className="btn btn-checkout">
                <CartSvg className="btn btn-svg-cart"/>
                <p>0</p>
                <p>ITEMS</p>
                <p>$2</p>
            </NavLink>
        </div>
    </nav>
}