import { JSX, Suspense } from "react";

import Loader from "./Loader.tsx";

const LazyLoad = ({ children }: IProps) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default LazyLoad;

interface IProps {
    children: JSX.Element;
}
