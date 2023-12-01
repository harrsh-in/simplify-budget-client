import { Outlet, useLocation } from "react-router-dom";

const PublicRouter = () => {
    const url = useLocation();
    console.log(url);

    return (
        <div>
            <p>Public page</p>

            <Outlet />
        </div>
    );
};

export default PublicRouter;
