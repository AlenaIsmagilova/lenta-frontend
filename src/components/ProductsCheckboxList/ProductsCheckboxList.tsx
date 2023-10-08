import { memo, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGetCategoriesQuery } from "../../services/CategoriesService";
import css from "./ProductsCheckboxList.module.css";
import classNames from "classnames";
import { IProductItem } from "../../models/IProductItem";

interface IProductsCheckboxListProps {
  bools: boolean[];
  setBools: (arr: boolean[]) => void;
  searchedStr: string;
}

const SUPER_IMPORTANT_CLASS_NAME = "my-box";

const ProductsCheckboxList = memo(
  ({ bools, setBools, searchedStr }: IProductsCheckboxListProps) => {
    const { data } = useGetCategoriesQuery("");

    //адское решение. TODO: recurcy or loop
    const createList = (data: IProductItem[]) => {
      const productsTree: { [key: string]: any } = {};
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (!productsTree[item.pr_group_id]) {
          productsTree[item.pr_group_id] = {};
        }
        if (!productsTree.childIndexes) {
          productsTree.childIndexes = [];
        }
        productsTree.childIndexes.push(i);

        if (!productsTree[item.pr_group_id][item.pr_cat_id]) {
          productsTree[item.pr_group_id][item.pr_cat_id] = {};
        }
        if (!productsTree[item.pr_group_id].childIndexes) {
          productsTree[item.pr_group_id].childIndexes = [];
        }
        productsTree[item.pr_group_id].childIndexes.push(i);

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

        productsTree[item.pr_group_id][item.pr_cat_id][item.pr_subcat_id][
          item.pr_sku_id
        ].originalIndex = i;
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

    useEffect(() => {
      if (data && bools.length === 0) {
        return setBools(new Array(data.data.length).fill(false));
      }
    }, [data]);

    const refs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
      console.log(refs);
    }, [refs.current]);

    useEffect(() => {
      if (searchedStr) {
        for (const div of refs.current) {
          div.classList.remove(css.opened);
          div.classList.add(css.closed);
          if (div.textContent?.includes(searchedStr)) {
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

    //так себе решение, но ...
    useLayoutEffect(() => {
      if (refs.current.length === 0) {
        refs.current = [
          ...document.querySelectorAll<HTMLDivElement>(
            `.${SUPER_IMPORTANT_CLASS_NAME}`
          ),
        ];
      }
    });

    if (!tree) return null;

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

    function onChange(
      e: React.FormEvent<HTMLInputElement>,
      list: any,
      levels: string[],
      key: string
    ) {
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
    const returnList = (list: any, level: number, levels: any[] = []): any => {
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
              <>
                <input
                  type="checkbox"
                  width={20}
                  height={20}
                  onChange={(e) => onChange(e, list, levels, key)}
                  checked={getChecked(levels, key)}
                />
                {typeof list[key] === "string" ? val : key}
              </>
            </div>
            {typeof list[key] === "object" &&
              returnList(list[key], level + 1, [...levels, key])}
          </div>
        );
      });
    };

    return <>{tree && returnList(tree, 0)}</>;
  }
);

export default ProductsCheckboxList;
