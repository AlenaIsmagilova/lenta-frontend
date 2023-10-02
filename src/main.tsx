import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {setupStore} from "./app/store";
import SignIn from "./pages/SignIn/SignIn";
import {CssBaseline, ThemeProvider} from "@mui/material";
import lentaTheme from "./app/assets/styles/theeme";
import Layout from "./components/Layout/Layout";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/statistics",
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lentaTheme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
