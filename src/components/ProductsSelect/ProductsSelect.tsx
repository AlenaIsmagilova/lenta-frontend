import {IProductItem, IProductsResponse} from "../../models/IProductsResponse";
import {Box, OutlinedInput} from "@mui/material";

import searchIcon from "../../app/images/search_regular.svg";
import {ChangeEvent, useState} from "react";
import ProductsCheckboxList from "../ProductsCheckboxList/ProductsCheckboxList";

interface IProductsSelectProps {
  products: IProductsResponse,
}

const ProductsSelect = ({products}: IProductsSelectProps) => {
  const [filteredData, setFilteredData] = useState<IProductItem[]>(products.data);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredData(products.data.filter(item => item.sku.includes(e.target.value)));
  }
  return (
    <Box mt={3}>
      <OutlinedInput
        onChange={handleSearch}
        fullWidth={true}
        startAdornment={<Box component={"img"} src={searchIcon} pr={2}/>}
        placeholder={"Найти"}
        sx={{height: 44, bgcolor: "white", borderRadius: 2}}
      />
      <ProductsCheckboxList data={filteredData}/>
    </Box>
  );
};

export default ProductsSelect;
