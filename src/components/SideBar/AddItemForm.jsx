import { Button } from "./Button"

export function AddItemForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input autoFocus />
            <Button>Add to list</Button>
        </form>
    )
}
