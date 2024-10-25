export function Item({ item }) {
    return (
        <li className="item">
            <label>
                <input checked={item.packed} type="checkbox" />
                {item.name}
            </label>

            <button>❌</button>
        </li>
    )
}
