import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IServerResponse } from "../models/IServerResponse";
import { IProductItem } from "../models/IProductItem";

const setNewField = (arr: any) => {
  const copyArr = [...arr];
  copyArr.forEach((el) => (el.selected = false));
  return { data: copyArr };
};

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: "/api/v1/categories/",
      }),
      // transformResponse: (response: any) => setNewField(response?.data),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
