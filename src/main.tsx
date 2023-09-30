import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setupStore } from "./app/store";
import "./app/assets/index.css";
import SignIn from "./pages/SignIn/SignIn";
import { ThemeProvider } from "@mui/material";
import lentaTheme from "./app/assets/styles/theeme";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
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
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
