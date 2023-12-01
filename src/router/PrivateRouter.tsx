import { Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
    const url = useLocation();
    console.log(url);

    return (
        <div>
            <p>Private page</p>

            <Outlet />
        </div>
    );
};

export default PrivateRouter;
