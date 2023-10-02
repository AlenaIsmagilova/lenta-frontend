import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";
import Templates from "../Templates/Templates";
import ForecastCard from "../ForecastCard/ForecastCard";

const Layout = () => {
  return (
    <>
      <Sidebar/>
      <Header>
        <Navigation/>
        <ProfileInfo/>
      </Header>
      <Templates/>
      <ForecastCard
        title={"Морсы"}
        from={new Date("2023-07-20")}
        to={new Date("2024-08-02")}
        growDirection={true}/>
      <ForecastCard
        title={"Булка с маком"}
        from={new Date("2023-07-20")}
        to={new Date("2024-08-02")}
        growDirection={false}/>
    </>
  );
};

export default Layout;
