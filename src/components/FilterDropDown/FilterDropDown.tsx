import {
  Box,
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme
} from "@mui/material";
import DropDownArrow from "../../app/images/down.svg";

interface IFilterDropDown {
  currentValue: string[],
  label: string,
  values: string[],
  setCurrentValue: Function
}

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

function getStyles(item: string, currentValue: readonly string[], theme: Theme) {
  return {
    fontWeight:
      currentValue.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterDropDown = ({currentValue, setCurrentValue, values, label}: IFilterDropDown) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof currentValue>) => {
    const {
      target: {value},
    } = event;
    setCurrentValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl fullWidth={true} sx={{mt: 2}}>
      <Select
        multiple
        displayEmpty
        value={currentValue}
        onChange={handleChange}
        input={<OutlinedInput/>}
        IconComponent={(props) => (
          <Button {...props}
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "0px 8px 8px 0px",
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
            return label
          }

          return selected.join(', ');
        }}
        MenuProps={MenuProps}
        inputProps={{'aria-label': 'Without label'}}
        sx={{height: '44px', borderRadius: 2, bgcolor: "white"}}
      >
        <MenuItem disabled value="">
          {label}
        </MenuItem>
        {values.map((item) => (
          <MenuItem
            key={item}
            value={item}
            style={getStyles(item, currentValue, theme)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterDropDown;
