import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";
import {ReactNode} from "react";
import {Box} from "@mui/material";

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
      <Box p={8}>{children}</Box>
    </>
  );
};

export default Layout;
