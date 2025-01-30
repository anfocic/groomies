import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import {FC, PropsWithChildren} from "react";

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
      <div>
          <Header/>
          {children}
          <Footer/>
      </div>
  )
}