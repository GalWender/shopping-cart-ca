import { useDispatch } from 'react-redux'
import { ReactComponent as CloseSvg } from '../assets/svg/close-icon.svg'
import { removeItem } from '../store/actions/cart.action'
export const CartPreview = ({ item }) => {
    const dispatch = useDispatch()
    const onRemoveItem = () => {
        dispatch(removeItem(item._id))
    }

    return <section className="cart-preview main-layout">
        <div className="item-container">
            <div><img src={require(`../assets/img/${item.imgUrl}`)} alt="" /></div>
            <div className="item-title-price-container">
                <p className="item-title">{item.title}</p>
                <p className="item-price">${item.price}</p>
            </div>
        </div>
        <button className="btn btn-svg-close" onClick={onRemoveItem}><CloseSvg /></button>
    </section>
}