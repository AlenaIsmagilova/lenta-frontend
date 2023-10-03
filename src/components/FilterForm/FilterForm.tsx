import {
  Box, Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme
} from "@mui/material";
import {useState} from "react";

import DropDownArrow from "../../app/images/down.svg";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterForm = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: {value},
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = () => {
    console.log("Фильтры применились");
  }

  return (
    <Box
      component="form"
      noValidate
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth={true} sx={{m: 1, mt: 3}}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput/>}
          IconComponent={(props) => (
            <Button {...props}
                    borderRadius={"0px 8px 8px 0px"}
                    sx={{
                      width: 44,
                      height: 44,
                      mt: "-15px",
                      mr: "-6px",
                      p: "10px",
                      minWidth: "unset",
                      borderLeft: '1px solid #D5D5D6',
                      backgroundColor: "background.paper"
                    }}>
              <Box component={"img"} src={DropDownArrow}/>
            </Button>
          )}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return "Выберите город";
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{'aria-label': 'Without label'}}
          sx={{height: '44px', borderRadius: 2, bgcolor: "white"}}
        >
          <MenuItem disabled value="">
            Выберите город
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </Box>
  );
};

export default FilterForm;
