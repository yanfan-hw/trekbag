import { useRef, useState } from "react"

import { Button } from "./Button"

export function AddItemForm({ itemList, onSetItemList }) {
    const [itemText, setItemText] = useState("")
    const inputRef = useRef()

    const handleInputChange = (e) => {
        setItemText(e.target.value)
    }

    const addItem = (name) => {
        const newItems = [
            ...itemList,
            {
                id: ++itemList.length,
                name: name,
                packed: false,
            },
        ]
        onSetItemList(newItems)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!itemText) {
            inputRef.current.focus()
            return
        }

        addItem(itemText)
        setItemText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                value={itemText}
                onChange={handleInputChange}
                autoFocus
            />
            <Button>Add to list</Button>
        </form>
    )
}
