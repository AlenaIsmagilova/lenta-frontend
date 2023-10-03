import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setupStore } from "./app/store";
import SignIn from "./pages/SignIn/SignIn";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lentaTheme from "./app/assets/styles/theeme";
import BasicTable from "./components/Table/Table";
import "./app/assets/styles/styles.css";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicTable />,
  },
  {
    path: "/signin",
    element: <SignIn />,
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
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
