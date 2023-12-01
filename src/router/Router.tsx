import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { get } from "lodash";
import Error from "../pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRouter />,
        children: Object.entries(PublicRoutes).map(([, el]) => {
            return {
                path: el.path,
                Component: el.component,
            };
        }),
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <PrivateRouter />,
        children: Object.entries(PrivateRoutes).map(([, el]) => {
            return {
                path: el.path,
                Component: el.component,
                index: get(el, "status", false),
            };
        }),
        errorElement: <Error />,
    },
]);

export default router;
