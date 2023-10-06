import {
  Box, Button, Typography
} from "@mui/material";
import React, {useMemo, useState} from "react";

import FilterDropDown from "../../components/FilterDropDown/FilterDropDown";
import NumberSelect from "../../components/NumberSelect/NumberSelect";
import ProductsSelect from "../../components/ProductsSelect/ProductsSelect";
import closeIcon from "../../app/images/close.svg";

import {
  setFormFilter, initialState
} from "./filterFormSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useGetShopsQuery} from "../../services/ShopService";
import {useGetCategoriesQuery} from "../../services/CategoriesService";
import {useLocation} from "react-router-dom";

const statisticPeriods = [
  {name: "День", value: 1},
  {name: "Неделя", value: 7},
  {name: "Месяц", value: 30}
];
const statisticPeriodNames = statisticPeriods.map(p => p.name);
const getStatisticNameByValue = (n: number): string => statisticPeriods.find(({value}) => value === n)?.name || '';
const getStatisticValueByName = (n: string): number => statisticPeriods.find(({name}) => name === n)?.value || 1;

const FilterForm = () => {
  const reduxFilter = useAppSelector(state => state.filterFormReducer);
  const [cities, setCities] = useState<string[]>(reduxFilter.cities);
  const [stores, setStores] = useState<string[]>(reduxFilter.stores);
  const [forecastDays, setForecastDays] = useState<number>(reduxFilter.forecastDays);
  const [products, setProducts] = useState<{ [key: string]: boolean }>(reduxFilter.products);
  const [statisticsPeriod, setStatisticsPeriod] = useState<string>(getStatisticNameByValue(reduxFilter.statisticsPeriod));
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();

  const {data: shopList} = useGetShopsQuery('');
  const {data: productsList} = useGetCategoriesQuery('');

  const citiesList = useMemo(() => shopList ? Array.from(new Set(shopList.data.map(item => item.st_city_id))) : [], [shopList]);
  const storesList = useMemo(() => shopList ? shopList.data.map(item => item.st_id) : [], [shopList]);
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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFormFilter({
      cities,
      stores,
      forecastDays,
      statisticsPeriod: getStatisticValueByName(statisticsPeriod),
      products
    }));
    console.log("Фильтры сохранились");
  }

  const handleReset = () => {
    setCities(initialState.cities);
    setStores(initialState.stores);
    setForecastDays(initialState.forecastDays);
    setProducts(initialState.products);
    setStatisticsPeriod(getStatisticNameByValue(initialState.statisticsPeriod));
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

        {pathname === '/' && (
          <>
            {label("Количество дней", 7)}
            <NumberSelect value={forecastDays} setValue={setForecastDays}/>
          </>
        )
        }
        {
          pathname !== '/' && (
            <>
              {label("Данные за период", 7)}
              <FilterDropDown
                multiple={false}
                currentValue={statisticsPeriod}
                label={""}
                values={statisticPeriodNames}
                setCurrentValue={setStatisticsPeriod}
              />
            </>
          )
        }

        {label("Товары", 7)}
      </Box>

      <ProductsSelect
        products={productsList ?? {data: []}}
        selectedProducts={products}
        setSelectedProducts={setProducts}
      />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 16px 32px 32px"}>
        <Button variant={"contained"} sx={{width: 109, borderRadius: 2}} type={"submit"}>Применить</Button>
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
