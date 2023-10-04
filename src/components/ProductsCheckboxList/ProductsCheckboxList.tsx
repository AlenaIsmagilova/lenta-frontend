import {IProductItem} from "../../models/IProductsResponse";
import {Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";

interface IProductsCheckboxListProps {
  data: IProductItem[]
}

const ProductsCheckboxList = ({data}: IProductsCheckboxListProps) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{width: '100%', bgcolor: "white", mt: 4, maxHeight: 480, overflow: 'auto',}} dense={true}>
      {data.map(item => (
        <ListItem
          key={item.sku}
          sx={{px: 0}}
        >
          <ListItemButton role={undefined} onClick={handleToggle(item.sku)} dense>
            <ListItemIcon sx={{minWidth: "unset"}}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(item.sku) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{'aria-labelledby': item.sku}}
              />
            </ListItemIcon>
            <ListItemText id={item.sku} primary={item.sku}
                          secondary={`${item.group} / ${item.category} / ${item.subcategory}`}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsCheckboxList;
