import homeImg from '../assets/img/home-img.jpg'
import { ItemList } from '../cmps/items-list'

export const Home = () => {

    return <section className="home">
        <div className="home-hero"><img src={homeImg} /></div>

        <div className="items-container">
            <ItemList />

        </div>
        
    </section>
}
