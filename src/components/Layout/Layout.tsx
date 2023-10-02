import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";
import Templates from "../Templates/Templates";

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <Header>
        <Navigation/>
        <ProfileInfo/>
      </Header>
      <Templates/>
    </>
  );
};

export default Layout;
