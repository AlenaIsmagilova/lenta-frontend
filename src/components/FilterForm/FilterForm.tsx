import {
  Box, Button, Typography
} from "@mui/material";
import {useState} from "react";

import FilterDropDown from "../FilterDropDown/FilterDropDown";
import NumberSelect from "../NumberSelect/NumberSelect";
import ProductsSelect from "../ProductsSelect/ProductsSelect";
import closeIcon from "../../app/images/close.svg";

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
    {
      "sku": "Товар 3",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 1",
      "uom": 1
    },

    {
      "sku": "Товар 4",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 2",
      "uom": 1
    },
    {
      "sku": "Товар 5",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 2",
      "uom": 1
    },
    {
      "sku": "Товар 6",
      "group": "Группа 1",
      "category": "Категория 1",
      "subcategory": "Подкатегория 2",
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
      onSubmit={handleSubmit}
    >
      <Box p={"20px 32px 0 32px"}>
        {label("Город")}
        <FilterDropDown currentValue={city} label={"Выберите город"} values={cities} setCurrentValue={setCity}/>

        {label("Торговый комплекс", 7)}
        <FilterDropDown currentValue={store} label={"Выберите ТК/Группу ТК"} values={stores}
                        setCurrentValue={setStore}/>

        {label("Количество дней", 7)}
        <NumberSelect value={days} setValue={setDays}/>

        {label("Товары", 7)}
      </Box>

      <ProductsSelect products={productsResponse}/>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 16px 32px 32px"}>
        <Button variant={"contained"} sx={{width: 109, borderRadius: 2}} type={"button"}>Применить</Button>
        <Button
          type={"reset"}
          sx={{
            width: 116,
            borderRadius: 0,
            p: 0,
            fontSize: "14px",
            lineHeight: "125%",
            fontWeight: "normal",
            letterSpacing: "0.14px",
            borderBottom: "1px solid"
          }}>
          <Box component={"img"} src={closeIcon} width={16} height={16} color={"primary"}/>
          Сбросить все
        </Button>
      </Box>
    </Box>
  );
};

export default FilterForm;
