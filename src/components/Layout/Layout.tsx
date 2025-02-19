import Header from "../Header/Header.tsx";
import { FC, lazy, PropsWithChildren, Suspense } from "react";

const Footer = lazy(() => import("../Footer/Footer.tsx"));

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};