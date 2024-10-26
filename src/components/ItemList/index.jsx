import { EmptyView } from "./EmptyView"
import { Sorting } from "./Sorting"
import { Item } from "./Item"

export function ItemList({ itemList, onSetItemList }) {
    const toggleItem = itemIdToggle => {
        const newItems = itemList.map((item) => {
            if (item.id === itemIdToggle) {
                return { ...item, packed: !item.packed }
            } else {
                return item
            }
        })
        onSetItemList(newItems)
    }

    const deleteItem = itemIdDelete => {
        const newItems = itemList.filter(item => item.id !== itemIdDelete)
        onSetItemList(newItems)
    }

    const items = itemList.map((item) => {
        return (
            <Item
                key={item.id}
                item={item}
                onToggleItem={toggleItem}
                onDeleteItem={deleteItem}
            />
        )
    })

    return (
        <ul className="item-list">
            {items.length === 0 ? <EmptyView /> : null}

            {items.length > 0 ? <Sorting /> : null}

            {items}
        </ul>
    )
}
