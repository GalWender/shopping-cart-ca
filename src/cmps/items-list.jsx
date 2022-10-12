import { ItemPreview } from "./item-preview"

export const ItemList = ({items}) => {

    console.log(items);
    return <section className="item-list">
        {items.map(item => {
            return <ItemPreview key={item._id} item={item} />
        })}
    </section>
} 