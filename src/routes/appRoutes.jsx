import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/Root";
import EmployeeList from "../components/EmployeeList";
import { Errorpage } from "../pages/ErrorPage";
import { Formas } from "../pages/Formas";
import SinglePage from "../components/SinglePage";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Show login component first
        errorElement: <Errorpage />,
    },
    {
        path: "/",
        element: <Root />, // Root layout with header and footer
        errorElement: <Errorpage />,
        children: [
            { path: "list", element: <EmployeeList /> },
            { path: "form", element: <Formas /> },
            { path: "employee/:id", element: <SinglePage /> }
        ]
    }
]);