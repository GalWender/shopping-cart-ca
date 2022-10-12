import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import homeImg from '../assets/img/home-img.jpg'
import { ItemList } from '../cmps/items-list'
import { itemService } from '../services/item.service'
import { loadCart } from '../store/actions/cart.action'

export const Home = () => {

    const [items, setItems] = useState(null)
    const cart = useSelector(state => state.cartModule.cart)

    useEffect(() => {
        getItems()
        loadCart()
    }, [])
    
    const getItems = async () => {
        const newItems = await itemService.query()
        setItems(newItems)
    }
    
    if (!items) return
    console.log('cart:' ,cart);
    return <section className="home">
        <div className="home-hero"><img src={homeImg} /></div>

        <div className="items-container main-layout">
            <div className="info">
                <h2>Our Products</h2>
                {/* <div className="cart-info">
                    <h4>My Cart</h4>
                    <span>({cart.length} items)</span>
                </div> */}
            </div>
            <ItemList items={items} />
        </div>

    </section>
}
