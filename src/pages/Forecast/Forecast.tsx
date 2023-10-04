import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ForecastControlRow from "../../components/ForecastControlRow/ForecastControlRow";
import TableComponent from "../../components/Table/TableComponent";

const Forecast = () => {
  return (
    <Layout>
      <ForecastTemplateRow />
      <ForecastControlRow />
      <TableComponent />
    </Layout>
  );
};

export default Forecast;
