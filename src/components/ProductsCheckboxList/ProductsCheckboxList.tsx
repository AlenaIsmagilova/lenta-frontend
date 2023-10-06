import {IProductItem} from "../../models/IProductItem";
import {Checkbox, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {memo, useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {IProductsTree} from "../../models/IProductsTree";

interface IProductsCheckboxListProps {
  data: IProductItem[],
  selectedProducts: { [key: string]: boolean },
  setSelectedProducts: (products: { [key: string]: boolean }) => void
}

const ProductsCheckboxList = memo(({data, selectedProducts, setSelectedProducts}: IProductsCheckboxListProps) => {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
  const isChecked = (value: string): boolean => selectedProducts[value];
  const handleToggle = (value: string) => () => {
    const {[value]: current, ...rest} = selectedProducts;
    if (!current) {
      rest[value] = true;
    }
    setSelectedProducts(rest);
  };

  const isCollapsed = (value: string): boolean => collapsed[value];

  const handleCollapse = (value: string) => () => {
    setCollapsed(prevState => {
      const {[value]: current, ...rest} = prevState;
      if (!current) {
        rest[value] = true;
      }

      return rest;
    });
  };

  const productsTree: IProductsTree = {};
  for (let item of data) {
    if (!productsTree[item.pr_group_id]) productsTree[item.pr_group_id] = {};
    if (!productsTree[item.pr_group_id][item.pr_cat_id]) productsTree[item.pr_group_id][item.pr_cat_id] = {};
    if (!productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id]) productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id] = [];

    productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id].push(item.pr_sku_id);
  }

  const treeListItem = (text: string, open: boolean | null, level: number, show = true) => (
    <ListItem
      key={text}
      sx={{p: 0}}
    >
      <ListItemButton onClick={handleCollapse(text)} dense sx={{pl: 4 * level, py: 0}}>
        <ListItemIcon sx={{minWidth: "unset"}}>
          <Checkbox
            edge="start"
            checked={isChecked(text)}
            tabIndex={-1}
            disableRipple
            inputProps={{'aria-labelledby': text}}
            onClick={(event) => {
              event.stopPropagation();
            }}
            onChange={() => {
              handleToggle(text);
            }}
          />
        </ListItemIcon>
        <ListItemText id={text} primary={text}/>
        {show ? (open ? <ExpandLess/> : <ExpandMore/>) : ''}
      </ListItemButton>
    </ListItem>);

  return (
    <List sx={{width: 280, bgcolor: "white", margin: "32px 16px 0 16px", maxHeight: 480, overflow: 'auto'}}>
      {Object.keys(productsTree).map(group => (
        <>
          {treeListItem(group, isCollapsed(group), 0)}
          <Collapse in={isCollapsed(group)} key={`${group}_collapse`}>
            <List disablePadding key={`${group}_list_items`}>
              {Object.keys(productsTree[group]).map(category => (
                <>
                  {treeListItem(category, isCollapsed(category), 1)}
                  <Collapse in={isCollapsed(category)} key={`${category}_collapse`}>
                    <List disablePadding key={`${category}_list_items`}>
                      {
                        Object.keys(productsTree[group][category]).map(subcategory => (
                          <>
                            {treeListItem(subcategory, isCollapsed(subcategory), 2)}
                            <Collapse in={isCollapsed(subcategory)} key={`${subcategory}_collapse`}>
                              <List disablePadding key={`${subcategory}_list_items`}>
                                {
                                  productsTree[group][category][subcategory].map(item => treeListItem(item, null, 3, false))
                                }
                              </List>
                            </Collapse>
                          </>
                        ))
                      }
                    </List>
                  </Collapse>
                </>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  )
});
// const ProductsCheckboxList = ({data}: IProductsCheckboxListProps) => {
//   const [checked, setChecked] = useState<string[]>([]);
//
//   const handleToggle = (value: string) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];
//
//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }
//
//     setChecked(newChecked);
//   };
//
//   return (
//     <List sx={{width: 280, bgcolor: "white", margin: "32px 16px 0 16px", maxHeight: 480, overflow: 'auto'}}
//           dense={true}>
//       {data.map(item => (
//         <ListItem
//           key={item.pr_sku_id}
//           sx={{px: 0}}
//         >
//           <ListItemButton role={undefined} onClick={handleToggle(item.pr_sku_id)} dense>
//             <ListItemIcon sx={{minWidth: "unset"}}>
//               <Checkbox
//                 edge="start"
//                 checked={checked.indexOf(item.pr_sku_id) !== -1}
//                 tabIndex={-1}
//                 disableRipple
//                 inputProps={{'aria-labelledby': item.pr_sku_id}}
//               />
//             </ListItemIcon>
//             <ListItemText id={item.pr_sku_id} primary={item.pr_sku_id}
//                           secondary={`${item.pr_group_id} / ${item.pr_cat_id} / ${item.pr_subcat_id}`}/>
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

export default ProductsCheckboxList;
