import {combineReducers, configureStore} from "@reduxjs/toolkit";
import signInReducer from "../features/SignInForm/signInFormSlice";
import {signInAPI} from "../services/SignInService";

const rootReducer = combineReducers({
    signInReducer,
    [signInAPI.reducerPath]: signInAPI.reducer
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(signInAPI.middleware)
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
