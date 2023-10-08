import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../models/IProductItem";

export interface IFilteredProducts {
  cities: string[];
  stores: string[];
  forecastDays: number;
  statisticsPeriod: number;
  filteredProducts: IProductItem[];
}

export const initialState: IFilteredProducts = {
  cities: [],
  stores: [],
  forecastDays: 7,
  statisticsPeriod: 7,
  filteredProducts: [],
};

export const filterFormSlice = createSlice({
  name: "filterForm",
  initialState: initialState,
  reducers: {
    setFormFilter(
      state,
      action: PayloadAction<{
        bools: boolean[];
        data: IProductItem[];
        cities: string[];
        stores: string[];
        forecastDays: number;
        statisticsPeriod: number;
      }>
    ) {
      state.filteredProducts = action.payload.data.filter(
        (el, i) => action.payload.bools[i]
      );
      state.cities = action.payload.cities;
      state.stores = action.payload.stores;
      state.forecastDays = action.payload.forecastDays;
      state.statisticsPeriod = action.payload.statisticsPeriod;
    },

    resetFormFilter() {
      return initialState;
    },
  },
});

export default filterFormSlice.reducer;

export const { setFormFilter, resetFormFilter } = filterFormSlice.actions;
