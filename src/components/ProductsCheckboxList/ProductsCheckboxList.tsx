import { memo, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGetCategoriesQuery } from "../../services/CategoriesService";
import css from "./ProductsCheckboxList.module.css";
import classNames from "classnames";

interface IProductsCheckboxListProps {
  // data: IProductItem[];
  // selectedProducts: { [key: string]: boolean };
  // setSelectedProducts?: (products: { [key: string]: boolean }) => void;
  bools: boolean[];
  setBools: (arr: boolean[]) => void;
  searchedStr: string;
}

const SUPER_IMPORTANT_CLASS_NAME = "my-box";

const ProductsCheckboxList = memo(
  ({
    bools,
    setBools,
    searchedStr,
  }: // data,
  // selectedProducts,
  // setSelectedProducts,
  IProductsCheckboxListProps) => {
    // const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
    // const isChecked = (value: string): boolean => selectedProducts[value];
    // const handleToggle = (value: string) => () => {
    //   const { [value]: current, ...rest } = selectedProducts;
    //   if (!current) {
    //     rest[value] = true;
    //   }
    //   // setSelectedProducts(rest);
    // };

    // const isCollapsed = (value: string): boolean => collapsed[value];
    // const isCollapsed = (value: string): boolean => true;

    // const handleCollapse = (value: string) => () => {
    // setCollapsed((prevState) => {
    //   const { [value]: current, ...rest } = prevState;
    //   if (!current) {
    //     rest[value] = true;
    //   }
    //   return rest;
    // });
    // };

    const { data } = useGetCategoriesQuery("");
    // const [tree, setTree] = useState<any | null>(null);

    const createList = (data: any) => {
      const productsTree: any = {};
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!productsTree[item.pr_group_id]) {
          productsTree[item.pr_group_id] = {};
        }
        if (!productsTree.childIndexes) {
          productsTree.childIndexes = [];
        }
        productsTree.childIndexes.push(i);

        // productsTree[item.pr_group_id].checked = false;

        if (!productsTree[item.pr_group_id][item.pr_cat_id]) {
          productsTree[item.pr_group_id][item.pr_cat_id] = {};
        }
        if (!productsTree[item.pr_group_id].childIndexes) {
          productsTree[item.pr_group_id].childIndexes = [];
        }
        productsTree[item.pr_group_id].childIndexes.push(i);

        // productsTree[item.pr_group_id][item.pr_cat_id].checked = false;

        if (
          !productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id]
        ) {
          productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id] =
            {};
        }

        if (!productsTree[item.pr_group_id][item.pr_cat_id].childIndexes) {
          productsTree[item.pr_group_id][item.pr_cat_id].childIndexes = [];
        }

        productsTree[item.pr_group_id][item.pr_cat_id].childIndexes.push(i);

        // productsTree[item.pr_group_id][item.pr_cat_id][
        //   item.pr_subcat_id
        // ].checked = false;

        if (
          !productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id][
            item.pr_sku_id
          ]
        ) {
          productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id][
            item.pr_sku_id
          ] = {};
        }

        if (
          !productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id]
            .childIndexes
        ) {
          productsTree[item.pr_group_id][item.pr_cat_id][
            item.pr_subcat_id
          ].childIndexes = [];
        }
        productsTree[item.pr_group_id][item.pr_cat_id][
          item.pr_subcat_id
        ].childIndexes.push(i);

        // productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id][
        //   item.pr_sku_id
        // ].checked = false;

        productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id][
          item.pr_sku_id
        ].originalIndex = i;

        // productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id].push(
        //   item.pr_sku_id
        // );
      }

      return productsTree;
    };

    useEffect(() => {}, [searchedStr]);

    const tree = useMemo(() => {
      if (data) {
        return createList(data.data);
      }
      return {};
    }, [data]);

    // const [bools, setBools] = useState<boolean[]>([]);

    useEffect(() => {
      if (data && bools.length === 0) {
        return setBools(new Array(data.data.length).fill(false));
      }
    }, [data]);

    const refs: any = useRef([]);

    useEffect(() => {
      console.log(refs);
    }, [refs.current]);

    useEffect(() => {
      if (searchedStr) {
        for (const div of refs.current) {
          div.classList.remove(css.opened);
          div.classList.add(css.closed);
          if (div.textContent.includes(searchedStr)) {
            div.classList.add(css.opened);
            div.classList.remove(css.closed);
          }
        }
      } else {
        for (const div of refs.current) {
          div.classList.add(css.closed);
          div.classList.remove(css.opened);
        }
      }
    }, [searchedStr]);

    useLayoutEffect(() => {
      if (refs.current.length === 0) {
        console.log("useLayoutEffect if block");
        refs.current = document.querySelectorAll(
          `.${SUPER_IMPORTANT_CLASS_NAME}`
        );
      }
    });

    // console.log(tree);

    // const ref = useRef(false);

    if (!tree) return null;

    // const productsTree: IProductsTree = {};
    // for (let item of data) {
    //   if (!productsTree[item.pr_group_id]) productsTree[item.pr_group_id] = {};
    //   if (!productsTree[item.pr_group_id][item.pr_cat_id])
    //     productsTree[item.pr_group_id][item.pr_cat_id] = {};
    //   if (!productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id])
    //     productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id] = [];

    //   productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id].push(
    //     item.pr_sku_id
    //   );
    // }

    // TODO: езли вложенность списка будет больше 3, это не подойдет.
    function getChecked(levels: string[], key: string) {
      let obj = tree;
      for (const str of levels) {
        obj = obj[str];
      }

      if (obj[key]?.originalIndex !== undefined) {
        return bools[obj[key]?.originalIndex] || false;
      }

      return obj[key]?.childIndexes?.every((i: number) => bools[i]) || false;
    }

    function onChange(e: any, list: any, levels: string[], key: string) {
      console.log(list[key]);
      // console.log(bools);

      if (list[key]?.originalIndex !== undefined) {
        const index = list[key]?.originalIndex;
        const newBools = [...bools];
        newBools[index] = !newBools[index];
        setBools(newBools);

        return;
      }

      const newBools = [...bools];
      const isChecked = getChecked(levels, key);
      for (const index of list[key]?.childIndexes || []) {
        newBools[index] = isChecked ? false : true;
      }
      setBools(newBools);

      // let newTree = { ...tree };
      // let obj = newTree;
      // for (const str of levels) {
      //   obj = obj[str];
      // }
      // obj[key].checked = !obj[key].checked;
      // setTree(newTree);
    }

    const toggleCollapse = (e: any) => {
      if (e.target.classList.contains(css.catTitle)) {
        e.preventDefault();
        e.stopPropagation();

        const div = e.target.closest(`.${SUPER_IMPORTANT_CLASS_NAME}`);

        if (div.classList.contains(css.closed)) {
          div.classList.remove(css.closed);
          div.classList.add(css.opened);
        } else {
          div.classList.remove(css.opened);
          div.classList.add(css.closed);
        }
      }
    };
    // let counter = -1;
    const returnList = (list: any, level: number, levels: any[] = []): any => {
      // counter++;

      return Object.entries(list).map(([key, val], i) => {
        if (key === "childIndexes" || key === "originalIndex") return;
        return (
          <div
            style={{ marginLeft: level + 10 }}
            onClick={toggleCollapse}
            className={classNames(css.closed, SUPER_IMPORTANT_CLASS_NAME)}
          >
            <div
              className={
                typeof list[key] === "object" ? css.catTitle : css.dippest
              }
            >
              <input
                type="checkbox"
                width={20}
                height={20}
                onChange={(e) => onChange(e, list, levels, key)}
                checked={getChecked(levels, key)}
              />
              {/* <Checkbox
                sx={{ padding: 0, width: 20, height: 20 }}
                onChange={(e) => onChange(e, list, levels, key)}
                checked={getChecked(levels, key)}
              /> */}
              {typeof list[key] === "string" ? val : key}
            </div>
            {typeof list[key] === "object" &&
              returnList(list[key], level + 1, [...levels, key])}
          </div>
        );

        // return typeof list[key] === "object" ? (
        //   <div
        //     onClick={toggleCollapse}
        //     className={classNames(css.collapsed, "parent")}
        //   >
        //     {key} {i}
        //     {returnList(list[key])}
        //   </div>
        // ) : (
        //   <div className="child">
        //     {/* <Checkbox /> */}
        //     {val} {i}
        //   </div>
        // );
        // if (typeof list[key] === "object") {
        //   return (
        //     <div className="parent">
        //       {key} {i}
        //       {returnList(list[key])}
        //     </div>
        //   );
        // }
        // return (
        //   <div className="child">
        //     {val} {i}
        //   </div>
        // );
        // return (
        //   <>

        //     {/* {Object.keys(list[key])} */}
        //   </>
        // );
      });
    };

    return <>{tree && returnList(tree, 0)}</>;

    // const treeListItem = (
    //   text: string,
    //   open: boolean | null,
    //   level: number,
    //   show = true
    // ) => (
    //   <ListItem key={text} sx={{ p: 0 }}>
    //     <ListItemButton
    //       onClick={handleCollapse(text)}
    //       dense
    //       sx={{ pl: 4 * level, py: 0 }}
    //     >
    //       <ListItemIcon sx={{ minWidth: "unset" }}>
    //         <Checkbox
    //           edge="start"
    //           // checked={isChecked(text)}
    //           checked={false}
    //           tabIndex={-1}
    //           disableRipple
    //           inputProps={{ "aria-labelledby": text }}
    //           onClick={(event) => {
    //             event.stopPropagation();
    //           }}
    //           onChange={() => {
    //             // handleToggle(text);
    //           }}
    //         />
    //       </ListItemIcon>
    //       <ListItemText id={text} primary={text} />
    //       {show ? open ? <ExpandLess /> : <ExpandMore /> : ""}
    //     </ListItemButton>
    //   </ListItem>
    // );

    // return (
    //   <List
    //     sx={{
    //       width: 280,
    //       bgcolor: "white",
    //       margin: "32px 16px 0 16px",
    //       maxHeight: 480,
    //       overflow: "auto",
    //     }}
    //   >
    //     {Object.keys(list).map((group) => (
    //       <>
    //         {treeListItem(group, isCollapsed(group), 0)}
    //         <Collapse in={isCollapsed(group)} key={`${group}_collapse`}>
    //           <List disablePadding key={`${group}_list_items`}>
    //             {Object.keys(list[group]).map((category) => (
    //               <>
    //                 {treeListItem(category, isCollapsed(category), 1)}
    //                 <Collapse
    //                   in={isCollapsed(category)}
    //                   key={`${category}_collapse`}
    //                 >
    //                   <List disablePadding key={`${category}_list_items`}>
    //                     {Object.keys(list[group][category]).map(
    //                       (subcategory) => (
    //                         <>
    //                           {treeListItem(
    //                             subcategory,
    //                             isCollapsed(subcategory),
    //                             2
    //                           )}
    //                           <Collapse
    //                             in={isCollapsed(subcategory)}
    //                             key={`${subcategory}_collapse`}
    //                           >
    //                             <List
    //                               disablePadding
    //                               key={`${subcategory}_list_items`}
    //                             >
    //                               {list[group][category][subcategory].map(
    //                                 (item) => treeListItem(item, null, 3, false)
    //                               )}
    //                             </List>
    //                           </Collapse>
    //                         </>
    //                       )
    //                     )}
    //                   </List>
    //                 </Collapse>
    //               </>
    //             ))}
    //           </List>
    //         </Collapse>
    //       </>
    //     ))}
    //   </List>
    // );
  }
);
// const ProductsCheckboxList = ({data}: IProductsCheckboxListProps) => {
//   const [checked, setChecked] = useState<string[]>([]);
//
// const handleToggle = (value: string) => () => {
//   const currentIndex = checked.indexOf(value);
//   const newChecked = [...checked];

//   if (currentIndex === -1) {
//     newChecked.push(value);
//   } else {
//     newChecked.splice(currentIndex, 1);
//   }

//   setChecked(newChecked);
// };
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
