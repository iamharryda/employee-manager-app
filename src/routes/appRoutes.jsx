import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/Root";
import EmployeeList from "../components/EmployeeList";
import { Errorpage } from "../pages/ErrorPage";
import { Formas } from "../pages/Formas";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Errorpage />,
        children: [
            { path: "/list", element: <EmployeeList /> },
            { path: "/form", element: <Formas /> }

        ]
    },
],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
)