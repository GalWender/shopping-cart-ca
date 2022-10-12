
export const ItemPreview = (item) => {

    return <section className="item-preview">
        <div className="card">
            <h3 className="title">item.title</h3>
            <img>item.imgUrl</img>
            <p className="desc">item.desc</p>
            <span className="price">item.price</span>
        </div>
    </section>

}