import {Logo} from "../../ui/logo/logo";
import {Box} from "@mui/material";
import FilterForm from "../FilterForm/FilterForm";

const Sidebar = () => {
  return (
    <Box
      component={"aside"}
      display={"flex"}
      flexDirection={"column"}
      width={308}
      p={8}
      bgcolor={"background.paper"}
    >
      <Logo/>
      <FilterForm/>
    </Box>
  );
};

export default Sidebar;
