import {
  Box, Typography
} from "@mui/material";
import {useState} from "react";

import FilterDropDown from "../FilterDropDown/FilterDropDown";
import NumberSelect from "../NumberSelect/NumberSelect";
import ProductsSelect from "../ProductsSelect/ProductsSelect";

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Краснодар",
  "Казань",
  "Новосибирск",
  "Омск",
  "Иркутск",
  "Владивосток"
];

const stores = [
  "ТК Москва",
  "ТК Санкт-Петербург",
  "ТК Краснодар",
  "ТК Казань",
  "ТК Новосибирск",
  "ТК Омск",
  "ТК Иркутск",
  "ТК Владивосток"
];

const productsResponse = {
  "data": [
    {
      "sku": "Товар 1",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 1",
      "uom": 1
    },
    {
      "sku": "Товар 2",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 1",
      "uom": 1
    },
  ]
};
const FilterForm = () => {
  const [city, setCity] = useState<string[]>([]);
  const [store, setStore] = useState<string[]>([]);
  const [days, setDays] = useState<number>(14);
  const label = (text: string, pt: number = 0) => (<Typography
    component="h3"
    fontSize={18}
    fontWeight={"bold"}
    lineHeight={"125%"}
    letterSpacing={"0.18px"}
    pt={pt}
  >
    {text}
  </Typography>);

  const handleSubmit = () => {
    console.log("Фильтры применились");
  }

  return (
    <Box
      component="form"
      noValidate
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      mt={13}
      onSubmit={handleSubmit}
    >
      {label("Город")}
      <FilterDropDown currentValue={city} label={"Выберите город"} values={cities} setCurrentValue={setCity}/>

      {label("Торговый комплекс", 7)}
      <FilterDropDown currentValue={store} label={"Выберите ТК/Группу ТК"} values={stores} setCurrentValue={setStore}/>

      {label("Количество дней", 7)}
      <NumberSelect value={days} setValue={setDays}/>

      {label("Товары", 7)}
      <ProductsSelect products={productsResponse}/>
    </Box>
  );
};

export default FilterForm;
