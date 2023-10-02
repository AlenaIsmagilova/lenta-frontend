import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ForecastControlRow from "../../components/ForecastControlRow/ForecastControlRow";

const Forecast = () => {
  return (
    <Layout>
      <ForecastTemplateRow/>
      <ForecastControlRow/>
    </Layout>
  );
};

export default Forecast;
