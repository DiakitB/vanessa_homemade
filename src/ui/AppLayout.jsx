import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

function AppLayout() {
    return <div className="grid grid-cols-[416px_1fr] h-[900px]  py-3 px-4  ">
        <Header />
        <Sidebar/>
        <main className="flex flex-cols gap-3 w-full">
            <h1>Main page</h1>
            <Outlet/>
        </main>
    </div>
}
export default AppLayout