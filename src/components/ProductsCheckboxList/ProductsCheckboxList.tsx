import {IProductItem} from "../../models/IProductsResponse";
import {Checkbox, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

interface IProductsCheckboxListProps {
  data: IProductItem[]
}

const ProductsCheckboxList = ({data}: IProductsCheckboxListProps) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState<string[]>([]);
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

  const handleCollapse = (value: string) => () => {
    const currentIndex = collapsed.indexOf(value);
    const newCollapsed = [...collapsed];

    if (currentIndex === -1) {
      newCollapsed.push(value);
    } else {
      newCollapsed.splice(currentIndex, 1);
    }

    setCollapsed(newCollapsed);
  };

  const productsTree = {};
  for (let item of data) {
    if (!productsTree[item.pr_group_id]) productsTree[item.pr_group_id] = {};
    if (!productsTree[item.pr_group_id][item.pr_cat_id]) productsTree[item.pr_group_id][item.pr_cat_id] = {};
    if (!productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id]) productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id] = [];

    productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id].push(item.pr_sku_id);
  }

  const treeListItem = (text, open, level, show = true) => (<ListItem
    key={text}
    sx={{p: 0}}
  >
    <ListItemButton onClick={handleCollapse(text)} dense sx={{pl: 4 * level, py: 0}}>
      <ListItemIcon sx={{minWidth: "unset"}}>
        <Checkbox
          edge="start"
          checked={checked.indexOf(text) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{'aria-labelledby': text}}
          onClick={handleToggle(text)}
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
          {treeListItem(group, collapsed.includes(group), 0)}
          <Collapse in={collapsed.includes(group)}>
            <List disablePadding>
              {Object.keys(productsTree[group]).map(category => (
                <>
                  {treeListItem(category, collapsed.includes(category), 1)}
                  <Collapse in={collapsed.includes(category)}>
                    <List disablePadding>
                      {
                        Object.keys(productsTree[group][category]).map(subcategory => (
                          <>
                            {treeListItem(subcategory, collapsed.includes(subcategory), 2)}
                            <Collapse in={collapsed.includes(subcategory)}>
                              <List disablePadding>
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
}
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
