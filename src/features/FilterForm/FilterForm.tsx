import { Box, Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

import FilterDropDown from "../../components/FilterDropDown/FilterDropDown";
import NumberSelect from "../../components/NumberSelect/NumberSelect";
import ProductsSelect from "../../components/ProductsSelect/ProductsSelect";
import closeIcon from "../../app/images/close.svg";

import { setFormFilter } from "./filterFormSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetShopsQuery } from "../../services/ShopService";
import { useGetCategoriesQuery } from "../../services/CategoriesService";
import { useLocation } from "react-router-dom";

const statisticPeriods = [
  { name: "День", value: 1 },
  { name: "Неделя", value: 7 },
  { name: "Месяц", value: 30 },
];
const statisticPeriodNames = statisticPeriods.map((p) => p.name);
const getStatisticNameByValue = (n: number): string =>
  statisticPeriods.find(({ value }) => value === n)?.name || "";
const getStatisticValueByName = (n: string): number =>
  statisticPeriods.find(({ name }) => name === n)?.value || 1;

const FilterForm = () => {
  // const stores = useAppSelector((state) => state.filterFormReducer.stores);
  // const forecastDays = useAppSelector(
  //   (state) => state.filterFormReducer.forecastDays
  // );
  const products = useAppSelector((state) => state.filterFormReducer.products);
  const { data } = useGetCategoriesQuery("");

  // const statisticsPeriod = useAppSelector(
  //   (state) => state.filterFormReducer.statisticsPeriod
  // );

  // const cities = useAppSelector((state) => state.filterFormReducer.cities);
  // const [cities, setCities] = useState<string[]>(reduxFilter.cities);
  // const [stores, setStores] = useState<string[]>(reduxFilter.stores);
  // const [forecastDays, setForecastDays] = useState<number>(reduxFilter.forecastDays);
  // const [products, setProducts] = useState<{ [key: string]: boolean }>(reduxFilter.products);
  // const [statisticsPeriod, setStatisticsPeriod] = useState<string>(getStatisticNameByValue(reduxFilter.statisticsPeriod));

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { data: shopList } = useGetShopsQuery("");
  const { data: productsList } = useGetCategoriesQuery("");

  // console.log(productsList, "this is productslist");

  const citiesList = useMemo(
    () =>
      shopList
        ? Array.from(new Set(shopList.data.map((item) => item.st_city_id)))
        : [],
    [shopList]
  );
  const storesList = useMemo(
    () => (shopList ? shopList.data.map((item) => item.st_id) : []),
    [shopList]
  );
  const label = (text: string, pt: number = 0) => (
    <Typography
      component="h3"
      fontSize={18}
      fontWeight={"bold"}
      lineHeight={"125%"}
      letterSpacing={"0.18px"}
      pt={pt}
    >
      {text}
    </Typography>
  );

  const [bools, setBools] = useState<boolean[]>([]);

  // const filteredArr = productsList.filter((el,i) => {
  //   return
  // })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(
    //   setFormFilter({
    //     cities,
    //     stores,
    //     forecastDays,
    //     // statisticsPeriod: getStatisticValueByName(statisticsPeriod),
    //     statisticsPeriod,
    //     products,
    //   })
    // );
    dispatch(setFormFilter({ bools, data: data.data }));
    console.log("Фильтры сохранились");
  };

  const handleReset = () => {
    // dispatch(resetFormFilter());
    // setCities(initialState.cities);
    // setStores(initialState.stores);
    // setForecastDays(initialState.forecastDays);
    // setProducts(initialState.products);
    // setStatisticsPeriod(getStatisticNameByValue(initialState.statisticsPeriod));
    console.log("Фильтры сбросились");
  };

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
        {/* <FilterDropDown
          currentValue={cities}
          label={"Выберите город"}
          values={citiesList}
          setCurrentValue={setCities}
        /> */}

        {label("Торговый комплекс", 7)}
        {/* <FilterDropDown
          currentValue={stores}
          label={"Выберите ТК/Группу ТК"}
          values={storesList}
          setCurrentValue={() => {}}
        /> */}

        {pathname === "/" && (
          <>
            {label("Количество дней", 7)}
            {/* <NumberSelect value={forecastDays} setValue={() => {}} /> */}
          </>
        )}
        {pathname !== "/" && (
          <>
            {label("Данные за период", 7)}
            {/* <FilterDropDown
              multiple={false}
              currentValue={statisticsPeriod.toString()}
              label={""}
              values={statisticPeriodNames}
              setCurrentValue={() => {}}
            /> */}
          </>
        )}

        {label("Товары", 7)}
      </Box>

      <ProductsSelect
        products={productsList ?? { data: [] }}
        selectedProducts={products}
        bools={bools}
        setBools={setBools}
        // setSelectedProducts={setProducts}
      />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"12px 16px 32px 32px"}
      >
        <Button
          variant={"contained"}
          sx={{ width: 109, borderRadius: 2 }}
          type={"submit"}
        >
          Применить
        </Button>
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
            borderBottom: "1px solid",
          }}
        >
          <Box
            component={"img"}
            src={closeIcon}
            width={16}
            height={16}
            color={"primary"}
          />
          Сбросить все
        </Button>
      </Box>
    </Box>
  );
};

export default FilterForm;
