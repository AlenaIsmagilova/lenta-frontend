import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ISignInRequest} from "../models/ISignInRequest";
import {ISignInResponse} from "../models/ISignInResponse";

export const signInAPI = createApi({
    reducerPath: 'signInAPI',
    baseQuery: fetchBaseQuery({
        // TODO: считывать из .env  файла
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: (build) => ({
        signIn: build.mutation<ISignInResponse, ISignInRequest>({
            query: (body) => ({
                // TODO: заменить на эндпоинт API
                url: '/login',
                method: "POST",
                body
            })
        })
    })
});

export const {
    useSignInMutation
} = signInAPI