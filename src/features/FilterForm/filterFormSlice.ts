import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnyObject } from "../../models/IAnyObject";
import { IProductItem } from "../../models/IProductItem";
import { categoriesAPI } from "../../services/CategoriesService";

export interface IFilterFormSlice {
  cities: string[];
  stores: string[];
  forecastDays: number;
  statisticsPeriod: number;
  products: IAnyObject;
}

// export const InitialState: IFilterFormSlice = {
//   cities: [],
//   stores: [],
//   forecastDays: 7,
//   statisticsPeriod: 7,
//   products: {},
// };

export interface IFilteredProducts {
  filteredProducts: IProductItem[];
}

export const initialState: IFilteredProducts = {
  filteredProducts: [],
};

export const filterFormSlice = createSlice({
  name: "filterForm",
  initialState: initialState,
  reducers: {
    // setFormFilter(state, action: PayloadAction<IFilterFormSlice>) {
    //   state.products = action.payload.products;
    //   state.stores = action.payload.stores;
    //   state.forecastDays = action.payload.forecastDays;
    //   state.statisticsPeriod = action.payload.statisticsPeriod;
    //   state.cities = action.payload.cities;
    // },
    setFormFilter(
      state,
      action: PayloadAction<{ bools: boolean[]; data: any[] }>
    ) {
      // console.log(state.products);
      console.log(action);

      state.filteredProducts = action.payload.data.filter(
        (el, i) => action.payload.bools[i]
      );

      // console.log(state, "this is state");
      // console.log(action, "this is action");
      // state.products = action.payload.products;
    },

    // setCities(state, action) {
    //   state.cities = action.payload.cities;
    // },
    // resetFormFilter() {
    //   return InitialState;
    // },
  },
});

export default filterFormSlice.reducer;

export const { setFormFilter } = filterFormSlice.actions;
