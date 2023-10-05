import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFilterFormSlice {
  cities: string[],
  stores: string[],
  forecastDays: number,
  statisticsPeriod: number,
  products: { [key: string]: boolean }
}

export const initialState: IFilterFormSlice = {
  cities: [],
  stores: [],
  forecastDays: 7,
  statisticsPeriod: 7,
  products: {}
}

export const filterFormSlice = createSlice({
  name: "filterForm",
  initialState,
  reducers: {
    setFormFilter(state, action: PayloadAction<IFilterFormSlice>) {
      state.products = action.payload.products;
      state.stores = action.payload.stores;
      state.forecastDays = action.payload.forecastDays;
      state.statisticsPeriod = action.payload.statisticsPeriod;
      state.cities = action.payload.cities;
    }
  }
});

export default filterFormSlice.reducer;

export const {
  setFormFilter
} = filterFormSlice.actions;
