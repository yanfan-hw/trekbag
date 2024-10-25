import { Button } from "./Button"

export function ButtonGroup() {
    const secondaryButtons = [
        {
            text: "Mark all as complete",
        },
        {
            text: "Mark all as incomplete",
        },
        {
            text: "Reset to initial",
        },
        {
            text: "Remove all items",
        },
    ]
    const listButtons = secondaryButtons.map((button) => {
        return <Button key={button.text}>{button.text}</Button>
    })

    return <section className="button-group">{listButtons}</section>
}
