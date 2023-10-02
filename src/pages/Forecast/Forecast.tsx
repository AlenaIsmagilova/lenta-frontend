import Layout from "../../components/Layout/Layout";
import Templates from "../../components/Templates/Templates";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

const Forecast = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Forecast;
