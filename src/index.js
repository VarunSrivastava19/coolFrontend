import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Registration from "./components/Registration";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Cookies from "universal-cookie";
import ConditionalComponent from "./components/ConditionalComponent";
const cookies = new Cookies();

const token = cookies.get("TOKEN"); 

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <ErrorPage />
  },
  {
    path: "/private/*",
    element: <ConditionalComponent token={token} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);