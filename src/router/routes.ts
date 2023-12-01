import Accounts from "../pages/private/Accounts";
import Dashboard from "../pages/private/Dashboard";
import Envelopes from "../pages/private/Envelopes";
import Labels from "../pages/private/Labels";
import Transactions from "../pages/private/Transactions";
import Home from "../pages/public/Home";
import SignIn from "../pages/public/SignIn";
import SignUp from "../pages/public/SignUp";

export const PublicRoutes = {
    "/": {
        path: "/",
        component: Home,
    },
    signin: {
        path: "/signin",
        component: SignIn,
    },
    signup: {
        path: "/signup",
        component: SignUp,
    },
};

export const PrivateRoutes = {
    accounts: {
        path: "/accounts",
        component: Accounts,
    },
    dashboard: {
        path: "/dashboard",
        component: Dashboard,
    },
    envelopes: {
        path: "/envelopes",
        component: Envelopes,
    },
    labels: {
        path: "/labels",
        component: Labels,
    },
    transactions: {
        path: "/transactions",
        component: Transactions,
    },
};
