import {Logo} from "../../ui/logo/logo";
import {Box} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      component={"aside"}
      display={"flex"}
      flexDirection={"column"}
      width={308}
      p={8}
    >
      <Logo/>
    </Box>
  );
};

export default Sidebar;
