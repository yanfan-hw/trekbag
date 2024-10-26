import { useState } from "react"

import { HeadingTitle } from "./HeadingTitle"
import { Header } from "./Header"
import { ItemList } from "./ItemList"
import { Footer } from "./Footer"
import { SideBar } from "./SideBar"

function App() {
    const [itemList, setItemList] = useState([])

    return (
        <>
            <HeadingTitle />
            <main>
                <Header itemList={itemList} />

                <ItemList
                    itemList={itemList}
                    onSetItemList={setItemList}
                />

                <SideBar
                    itemList={itemList}
                    onSetItemList={setItemList}
                />
            </main>

            <Footer />
        </>
    )
}

export default App
