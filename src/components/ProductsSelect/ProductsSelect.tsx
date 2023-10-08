import { IProductItem } from "../../models/IProductItem";
import { Box, OutlinedInput } from "@mui/material";

import searchIcon from "../../app/images/search_regular.svg";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import ProductsCheckboxList from "../ProductsCheckboxList/ProductsCheckboxList";
import { IServerResponse } from "../../models/IServerResponse";

interface IProductsSelectProps {
  products: IServerResponse<IProductItem[]>;
  selectedProducts: { [key: string]: boolean };
  setSelectedProducts?: (products: { [key: string]: boolean }) => void;
}

const ProductsSelect = ({
  products,
  selectedProducts,
  setSelectedProducts,
  bools,
  setBools,
}: any) => {
  const [filteredData, setFilteredData] = useState<IProductItem[]>([]);

  useEffect(() => {
    setFilteredData(products.data);
  }, [products]);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFilteredData(
        products.data.filter((item: any) =>
          item.pr_sku_id.includes(e.target.value)
        )
      );
    },
    [products]
  );

  return (
    <Box mt={3}>
      <OutlinedInput
        onChange={handleSearch}
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
        // data={filteredData}
        // selectedProducts={selectedProducts}
        // setSelectedProducts={setSelectedProducts}
      />
    </Box>
  );
};

export default ProductsSelect;
