import { Outlet } from "react-router-dom"
import Headers from "../components/Header"
import Footers from "../components/Footer"

export const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    )
}