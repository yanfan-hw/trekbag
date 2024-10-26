import { AddItemForm } from "./AddItemForm"
import { ButtonGroup } from "./ButtonGroup"

export function SideBar({ itemList, onSetItemList }) {
    return (
        <div className="sidebar">
            <AddItemForm itemList={itemList} onSetItemList={onSetItemList} />

            <ButtonGroup itemList={itemList} onSetItemList={onSetItemList} />
        </div>
    )
}
