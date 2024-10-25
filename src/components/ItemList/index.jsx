import { EmptyView } from "./EmptyView"
import { Sorting } from "./Sorting"
import { Item } from "./Item"

export const items = [
    {
        id: 1,
        name: "good mood",
        packed: true,
    },
    {
        id: 2,
        name: "passport",
        packed: false,
    },
    {
        id: 3,
        name: "phone charger",
        packed: false,
    },
]

export function ItemList() {
    const itemList = items.map(item => {
        return <Item key={item.id} item={item} />
    })

    return (
        <ul className="item-list">
            {items.length === 0 ? <EmptyView /> : null}

            {items.length > 0 ? <Sorting /> : null}

            {itemList}
        </ul>
    )
}
