import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setupStore } from "./app/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lentaTheme from "./app/assets/styles/theeme";
import BasicTable from "./components/Table/Table";
import "./app/assets/styles/styles.css";

import SignIn from "./pages/SignIn/SignIn";
import Forecast from "./pages/Forecast/Forecast";
import Statistics from "./pages/Statictics/Statistics";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forecast />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lentaTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
