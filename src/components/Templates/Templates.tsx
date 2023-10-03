import {Box, Typography} from "@mui/material";
import ChipsArray from "../Chip/Chip";

const Templates = () => {
  return (
    <Box component="section" width={763} bgcolor={"secondary.light"} borderRadius={5}>
      <Box minWidth={294} width={"100%"} minHeight={135} px={6} py={5} display={"flex"} flexDirection={"column"}
           justifyContent={"space-between"}>
        <Typography
          component="h2"
          fontSize={24}
          fontWeight={"bold"}
          lineHeight={"130%"}
          letterSpacing={"0.24px"}
        >
          Мои шаблоны
        </Typography>
        <ChipsArray/>
        <Typography
          component="p"
          fontSize={16}
          fontWeight={"normal"}
          lineHeight={"125%"}
          letterSpacing={"0.16px"}
        >
          Здесь будут храниться ваши шаблоны
        </Typography>
      </Box>
    </Box>
  );
}
export default Templates;
