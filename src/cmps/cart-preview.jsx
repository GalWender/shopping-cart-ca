import { useDispatch } from 'react-redux'
import { ReactComponent as CloseSvg } from '../assets/svg/close-icon.svg'
export const CartPreview = ({ item }) => {
    const dispatch = useDispatch()
    const removeItem = () => {
        console.log(item._id);
        // dispatch(removeItem(item._id))
    }

    return <section className="cart-preview main-layout">
        <div className="item-container">
            {/* <div><img src={require(`../assets/img/${item.imgUrl}`)} alt="" /></div> */}
            <div className="item-title-price-container">
                <p className="item-title">{item.title}</p>
                <p className="item-price">${item.price}</p>
            </div>
        </div>
        <button className="btn btn-svg-close" onClick={removeItem}><CloseSvg /></button>
    </section>
}