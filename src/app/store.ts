import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/SignInForm/signInFormSlice";
import { getUserAPI } from "../services/GetUserService";
import { signInAPI } from "../services/SignInService";

const rootReducer = combineReducers({
  signInReducer,
  [signInAPI.reducerPath]: signInAPI.reducer,
  [getUserAPI.reducerPath]: getUserAPI.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        signInAPI.middleware,
        getUserAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
