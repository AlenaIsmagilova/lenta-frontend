import {
  Box, Button, Typography
} from "@mui/material";
import {useState} from "react";

import FilterDropDown from "../../components/FilterDropDown/FilterDropDown";
import NumberSelect from "../../components/NumberSelect/NumberSelect";
import ProductsSelect from "../../components/ProductsSelect/ProductsSelect";
import closeIcon from "../../app/images/close.svg";
import {IProductItem} from "../../models/IProductsResponse";

import {
  setFormFilter, initialState
} from "./filterFormSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const citiesList = [
  "Москва",
  "Санкт-Петербург",
  "Краснодар",
  "Казань",
  "Новосибирск",
  "Омск",
  "Иркутск",
  "Владивосток"
];

const storesList = [
  "ТК Москва",
  "ТК Санкт-Петербург",
  "ТК Краснодар",
  "ТК Казань",
  "ТК Новосибирск",
  "ТК Омск",
  "ТК Иркутск",
  "ТК Владивосток"
];

const productsList: IProductItem[] = [];
for (let i = 1; i < 1001; i++) {
  productsList.push({
    pr_sku_id: `Товар ${i}`,
    pr_cat_id: `Категория ${i % 3 + 1}-${i % 3 + 1}`,
    pr_group_id: `Группа ${i % 3 + 1}`,
    pr_subcat_id: `Подкатегория ${i % 3 + 1}-${i % 3 + 1}-${i % 3 + 1}`,
    pr_uom_id: 1
  });
}

const FilterForm = () => {
  const reduxFilter = useAppSelector(state => state.filterFormReducer);
  const [cities, setCities] = useState<string[]>(reduxFilter.cities);
  const [stores, setStores] = useState<string[]>(reduxFilter.stores);
  const [forecastDays, setForecastDays] = useState<number>(reduxFilter.forecastDays);
  const [products, setProducts] = useState<{ [key: string]: boolean }>(reduxFilter.products);
  const dispatch = useAppDispatch();

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
    dispatch(setFormFilter({
      cities,
      stores,
      forecastDays,
      statisticsPeriod: reduxFilter.statisticsPeriod,
      products
    }));
    console.log("Фильтры сохранились");
  }

  const handleReset = () => {
    setCities(initialState.cities);
    setStores(initialState.stores);
    setForecastDays(initialState.forecastDays);
    setProducts(initialState.products);
    console.log("Фильтры сбросились");
  }

  return (
    <Box
      component="form"
      noValidate
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Box p={"20px 32px 0 32px"}>
        {label("Город")}
        <FilterDropDown
          currentValue={cities}
          label={"Выберите город"}
          values={citiesList}
          setCurrentValue={setCities}/>

        {label("Торговый комплекс", 7)}
        <FilterDropDown
          currentValue={stores}
          label={"Выберите ТК/Группу ТК"}
          values={storesList}
          setCurrentValue={setStores}/>

        {label("Количество дней", 7)}
        <NumberSelect value={forecastDays} setValue={setForecastDays}/>

        {label("Товары", 7)}
      </Box>

      <ProductsSelect
        products={{data: productsList}}
        selectedProducts={products}
        setSelectedProducts={setProducts}
      />

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
