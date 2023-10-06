import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IServerResponse} from "../models/IServerResponse";
import {IProductItem} from "../models/IProductItem";

export const categoriesAPI = createApi({
  reducerPath: 'categoriesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: (build) => ({
    getCategories: build.query<IServerResponse<IProductItem[]>, string>({
      query: () => ({
        url: '/api/v1/categories/'
      })
    })
  })
})

export const {
  useGetCategoriesQuery
} = categoriesAPI;
