import { Button } from "./Button"
import { initialItems } from "../../data/InitialItems"

export function ButtonGroup({ itemList, onSetItemList }) {
    const toggleAllItems = (toggle) => {
        return itemList.map((item) => {
            return { ...item, packed: toggle }
        })
    }
    const markAllAsComplete = () => {
        const newItems = toggleAllItems(true)
        onSetItemList(newItems)
    }
    const markAllAsInComplete = () => {
        const newItems = toggleAllItems(false)
        onSetItemList(newItems)
    }
    const resetToInitial = () => {
        onSetItemList(initialItems)
    }
    const removeAllItems = () => {
        onSetItemList([])
    }

    const secondaryButtons = [
        {
            text: "Mark all as complete",
            onClick: markAllAsComplete,
        },
        {
            text: "Mark all as incomplete",
            onClick: markAllAsInComplete,
        },
        {
            text: "Reset to initial",
            onClick: resetToInitial,
        },
        {
            text: "Remove all items",
            onClick: removeAllItems,
        },
    ]

    const listButtons = secondaryButtons.map((button, index) => {
        return (
            <Button
                key={++index}
                buttonType="secondary"
                onClick={button.onClick}
            >
                {button.text}
            </Button>
        )
    })

    return <section className="button-group">{listButtons}</section>
}
