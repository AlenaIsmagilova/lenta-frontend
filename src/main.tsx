import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {setupStore} from "./app/store";
import "./app/assets/index.css";
import SignIn from "./pages/SignIn/SignIn";
import {ThemeProvider} from "@mui/material";
import lentaTheme from "./app/theeme";

const store = setupStore();

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn/>,
    },
    {
        path: "/statistics",
        element: <SignIn/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={lentaTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
