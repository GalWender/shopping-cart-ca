
export const ItemPreview = ({item}) => {

    return <section className="item-preview">
        <div className="card">
            <h3 className="title">{item.title}</h3>
            <img src=""></img>
            <span className="price">Price: ${item.price}</span>
            <button className="btn add-to-cart">Add to cart</button>
        </div>
    </section>

}