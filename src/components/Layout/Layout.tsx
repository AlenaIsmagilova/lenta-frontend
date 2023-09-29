import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Header>
        <Navigation />
        <ProfileInfo />
      </Header>
    </>
  );
};

export default Layout;
