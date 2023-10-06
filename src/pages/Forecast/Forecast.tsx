import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";

const Forecast = () => {
  return (
    <Layout>
      <ForecastTemplateRow/>
      <ControlRow/>
      <TableComponent/>
    </Layout>
  );
};

export default Forecast;
