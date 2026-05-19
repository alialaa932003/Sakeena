import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/not-found";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
