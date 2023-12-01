import ListAccounts from "../pages/private/Account/List";
import Dashboard from "../pages/private/Dashboard";
import CreateEnvelope from "../pages/private/Envelope/Create";
import ListEnvelopes from "../pages/private/Envelope/List";
import ListLabels from "../pages/private/Label/List";
import ListTransactions from "../pages/private/Transaction/List";
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
        path: "/account",
        component: ListAccounts,
    },
    dashboard: {
        path: "/dashboard",
        component: Dashboard,
    },
    envelope: {
        path: "/envelope",
        component: ListEnvelopes,
    },
    "envelope/create": {
        path: "/envelope/create",
        component: CreateEnvelope,
        index: false,
    },
    label: {
        path: "/label",
        component: ListLabels,
    },
    transaction: {
        path: "/transaction",
        component: ListTransactions,
    },
};
