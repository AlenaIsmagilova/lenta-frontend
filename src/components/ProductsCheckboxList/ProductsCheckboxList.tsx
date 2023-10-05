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
    <List sx={{width: 280, bgcolor: "white", margin: "32px 16px 0 16px", maxHeight: 480, overflow: 'auto'}}
          dense={true}>
      {data.map(item => (
        <ListItem
          key={item.pr_sku_id}
          sx={{px: 0}}
        >
          <ListItemButton role={undefined} onClick={handleToggle(item.pr_sku_id)} dense>
            <ListItemIcon sx={{minWidth: "unset"}}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(item.pr_sku_id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{'aria-labelledby': item.pr_sku_id}}
              />
            </ListItemIcon>
            <ListItemText id={item.pr_sku_id} primary={item.pr_sku_id}
                          secondary={`${item.pr_group_id} / ${item.pr_cat_id} / ${item.pr_subcat_id}`}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsCheckboxList;
