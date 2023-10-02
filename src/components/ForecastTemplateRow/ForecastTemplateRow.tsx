import {Box} from "@mui/material";
import Templates from "../Templates/Templates";
import ForecastCard from "../ForecastCard/ForecastCard";

const ForecastTemplateRow = () => {
  return (
    <Box
      display={"flex"}
      gap={7}
    >
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
    </Box>
  );
};

export default ForecastTemplateRow;
