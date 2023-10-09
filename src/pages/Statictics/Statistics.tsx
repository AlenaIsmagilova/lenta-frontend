import Layout from "../../components/Layout/Layout";
import StatisticTemplateRow from "../../components/StatisticTemplateRow/StatisticTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";

const Statistics = () => {
  const staticColumnNames = [
    "TK",
    "Группа",
    "Категория",
    "Подкатегория",
    "Товар",
    "Eд. Изм.",
    "Фактические продажи",
    "Прогноз (кол-во)",
    `Разница факт/прогноз (ед. изм.)`,
    "Разница факт/прогноз (руб)",
    "Кач-во прогноза",
  ];

  // const rows = new Array(15).fill("").map(() => new Array(staticColumnNames.length).fill(""));
  return (
    <Layout>
      <StatisticTemplateRow />
      <ControlRow />
      <TableComponent
        tableRows={[]}
        tableColumns={staticColumnNames}
        staticColumnsNumber={10}
      />
    </Layout>
  );
};

export default Statistics;
