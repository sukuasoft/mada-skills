import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import AulaHtml from "./pages/aulas/html";

const router = createBrowserRouter([
    {
        path: '/', 
        Component: Home
    }, 

    {
        path: '/aula/html', 
        Component: AulaHtml
    }
])

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}


