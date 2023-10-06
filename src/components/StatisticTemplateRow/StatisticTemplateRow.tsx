import {Box} from "@mui/material";
import Templates from "../Templates/Templates";
import ForecastCard from "../ForecastCard/ForecastCard";

const StatisticTemplateRow = () => {
  const from = new Date();
  const to = new Date();

  from.setDate(from.getDate() + 1);
  to.setDate(to.getDate() + 15);
  return (
    <Box
      display={"flex"}
      gap={7}
    >
      <Templates/>
      <ForecastCard
        title={"Салат крабовый"}
        from={from}
        to={to}
        growDirection={true}
        cardTitle={"Лидер роста продаж"}
      />
      <ForecastCard
        title={"Вишневый штрудель"}
        from={from}
        to={to}
        growDirection={false}
        cardTitle={"Падение продаж"}
      />
    </Box>
  );
};

export default StatisticTemplateRow;
