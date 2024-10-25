import { HeadingTitle } from "./HeadingTitle"
import { Header } from "./Header"
import { ItemList } from "./ItemList"
import { Footer } from "./Footer"
import { SideBar } from "./SideBar"

function App() {
    return (
        <>
            <HeadingTitle />

            <main>
                <Header />
                <ItemList />
                <SideBar />
            </main>

            <Footer />
        </>
    )
}

export default App
