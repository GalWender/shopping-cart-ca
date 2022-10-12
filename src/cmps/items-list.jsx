import { ItemPreview } from "./item-preview"

export const ItemList = () => {

    return <section className="item-list">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} />
        })}
    </section>
} 