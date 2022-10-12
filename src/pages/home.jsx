import { useEffect, useState } from 'react'
import homeImg from '../assets/img/home-img.jpg'
import { ItemList } from '../cmps/items-list'
import { itemService } from '../services/item.service'

export const Home = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        const newItems = await itemService.query()
        setItems(newItems)
    }

    if (!items) return
    return <section className="home">
        <div className="home-hero"><img src={homeImg} /></div>

        <div className="items-container main-layout">
            <div className="info">
                <h2>Our Products</h2>
                <div className="cart-info">
                    <h4>My Cart</h4>
                    <span>(0 Items)</span>
                </div>
            </div>
            <ItemList items={items} />
        </div>

    </section>
}
