export function Item({ item, onToggleItem, onDeleteItem }) {
    const handleToggleItem = () => {
        onToggleItem(item.id)
    }

    const handleDeleteItem = () => {
        onDeleteItem(item.id)
    }

    return (
        <li className="item">
            <label>
                <input
                    onChange={handleToggleItem}
                    checked={item.packed}
                    type="checkbox"
                />
                {item.name}
            </label>

            <button onClick={handleDeleteItem}>❌</button>
        </li>
    )
}
