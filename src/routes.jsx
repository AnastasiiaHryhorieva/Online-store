import React from "react";

import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Catalog from "./pages/catalog/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "catalog",
    element: <Catalog />,
  },
  {
    path: "catalog/:id",
    element: <Catalog />,
  },
]);

export default router;
