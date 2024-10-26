import { Logo } from "./Logo"
import { Counter } from "./Counter"

export function Header({ itemList }) {
    const countItemPacked = () => {
        const itemsPacked = itemList.filter(item => item.packed);
        return itemsPacked.length
    }

    return (
        <header>
            <Logo />
            <Counter
                totalItemPacked={countItemPacked()}
                totalItems={itemList.length}
            />
        </header>
    )
}
