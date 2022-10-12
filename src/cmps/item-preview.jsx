import { useDispatch } from "react-redux"
import { addItem } from "../store/actions/cart.action"

export const ItemPreview = ({ item }) => {

    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch(addItem(item))
    }
console.log('item:', item)
    return <section className="item-preview">
        <div className="card">
            <h3 className="title">{item.title}</h3>
            <img src={require(`../assets/img/${item.imgUrl}`)}></img>
            <span className="price">Price: ${item.price}</span>
            <button onClick={addItemToCart} className="btn add-to-cart">Add to cart</button>
        </div>
    </section>

}