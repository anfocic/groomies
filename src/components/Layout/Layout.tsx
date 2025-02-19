import Header from "../Header/Header.tsx";
import {FC, lazy, PropsWithChildren} from "react";

const Footer = lazy(() => import("../Footer/Footer.tsx"));

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}