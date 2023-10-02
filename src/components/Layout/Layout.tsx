import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";
import {ReactNode} from "react";

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <>
      <Sidebar/>
      <Header>
        <Navigation/>
        <ProfileInfo/>
      </Header>
      {children}
    </>
  );
};

export default Layout;
