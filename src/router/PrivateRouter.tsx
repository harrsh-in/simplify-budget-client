import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
    return (
        <div>
            <p>Private page</p>

            <Outlet />
        </div>
    );
};

export default PrivateRouter;
