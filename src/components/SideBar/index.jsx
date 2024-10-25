import { AddItemForm } from "./AddItemForm"
import { ButtonGroup } from "./ButtonGroup"

export function SideBar() {
    return (
        <div className="sidebar">
            <AddItemForm />

            <ButtonGroup />
        </div>
    )
}
