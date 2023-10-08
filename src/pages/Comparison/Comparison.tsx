import Chart from "../../components/Chart/Chart";
import Layout from "../../components/Layout/Layout";
import ComparisonTemplateRow from "../../components/ComparisonTemplateRow/ComparisonTemplateRow";

const Comparison = () => {
  return (
    <Layout>
      <ComparisonTemplateRow/>
      <Chart/>
    </Layout>
  );
};

export default Comparison;
