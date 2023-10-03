import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ForecastControlRow from "../../components/ForecastControlRow/ForecastControlRow";
import BasicTable from "../../components/Table/Table";

const Forecast = () => {
  return (
    <Layout>
      <ForecastTemplateRow />
      <ForecastControlRow />
      <BasicTable />
    </Layout>
  );
};

export default Forecast;
