import { IProductItem } from "../../models/IProductItem";
import { Box, OutlinedInput } from "@mui/material";

import searchIcon from "../../app/images/search_regular.svg";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import ProductsCheckboxList from "../ProductsCheckboxList/ProductsCheckboxList";
import { IServerResponse } from "../../models/IServerResponse";

interface IProductsSelectProps {
  products: IServerResponse<IProductItem[]>;
  selectedProducts: IProductItem[];
  setSelectedProducts: (products: IProductItem[]) => void;
  bools: boolean[];
  setBools: any;
}

const ProductsSelect = ({
  products,
  selectedProducts,
  setSelectedProducts,
  bools,
  setBools,
}: IProductsSelectProps) => {
  const [searchedStr, setSearchedStr] = useState<string>("");

  // useEffect(() => {
  // setFilteredData(products.data);
  // }, [products]);

  const handleSearch = useCallback(
    (e: any) => {
      console.log(e.target.value, "this is e target value");

      setSearchedStr(e.target.value);

      // setFilteredData(
      //   products.data.filter((item: any) =>
      //     item.pr_sku_id.includes(e.target.value)
      //   )
      // );
    },
    [products]
  );

  return (
    <Box mt={3}>
      <OutlinedInput
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleSearch(e);
          }
        }}
        // onChange={handleSearch}
        startAdornment={<Box component={"img"} src={searchIcon} pr={2} />}
        placeholder={"Найти"}
        sx={{
          height: 44,
          bgcolor: "white",
          borderRadius: 2,
          mx: 8,
          width: 244,
        }}
      />

      <ProductsCheckboxList
        bools={bools}
        setBools={setBools}
        searchedStr={searchedStr}
        // selectedProducts={selectedProducts}
        // setSelectedProducts={setSelectedProducts}
      />
    </Box>
  );
};

export default ProductsSelect;
