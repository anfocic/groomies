import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";
import {FC, PropsWithChildren} from "react";

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};