import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ISignIn} from "../models/ISignIn";
import {IToken} from "../models/IToken";

export const signInAPI = createApi({
    reducerPath: 'signInAPI',
    baseQuery: fetchBaseQuery({
        // TODO: считывать из .env  файла
        baseUrl: 'http://localhost:5000'
    }),
    endpoints: (build) => ({
        signIn: build.mutation<IToken, ISignIn>({
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