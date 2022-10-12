import homeImg from '../assets/img/home-img.jpg'
import { ItemList } from '../cmps/items-list'

export const Home = () => {

    return <section className="home">
        <div className="home-hero"><img src={homeImg} /></div>

        <div className="items-container">
            <div className="info">
                <h2>Our Products</h2>
                <div className="cart-info">
                    <span>My Cart</span>
                </div>
            </div>
            <ItemList />

        </div>

    </section>
}
