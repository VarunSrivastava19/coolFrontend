import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Root from './routes/Root';
import ErrorPage from "./ErrorPage";
import Registration from "./components/Registration";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/registration",
    element: <Registration />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);