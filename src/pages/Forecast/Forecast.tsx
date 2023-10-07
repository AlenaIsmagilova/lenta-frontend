import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";
import {useAppSelector} from "../../hooks/redux";
import {useMemo} from "react";

const Forecast = () => {
  const reduxFilter = useAppSelector(state => state.filterFormReducer);
  const staticColumnNames = ["TK", "Группа", "Категория", "Подкатегория", "Товар"];

  const columns = useMemo(() => {
    const dateColumns = new Array(reduxFilter.forecastDays)
      .fill("")
      .map((_v, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i + 1);
        return `${date.getDate()}.${date.getMonth() + 1}`;
      });

    return staticColumnNames.concat(dateColumns);
  }, [reduxFilter]);

  const rows = useMemo(() => new Array(15).fill("").map(() => new Array(columns.length).fill("")), [columns]);

  return (
    <Layout>
      <ForecastTemplateRow/>
      <ControlRow/>
      <TableComponent tableColumns={columns} tableRows={rows} staticColumnsNumber={staticColumnNames.length}/>
    </Layout>
  );
};

export default Forecast;
