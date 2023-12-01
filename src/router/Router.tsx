import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { PrivateRoutes, PublicRoutes } from "./routes";

const Router = () => {
    return (
        <Routes>
            <Route element={<PublicRouter />}>
                {Object.entries(PublicRoutes).map(([key, el]) => {
                    return (
                        <Route
                            key={key}
                            path={el.path}
                            element={<el.component />}
                        />
                    );
                })}

                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Route>

            <Route element={<PrivateRouter />}>
                {Object.entries(PrivateRoutes).map(([key, el]) => {
                    return (
                        <Route
                            key={key}
                            path={el.path}
                            element={<el.component />}
                        />
                    );
                })}

                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Route>
        </Routes>
    );
};

export default Router;
