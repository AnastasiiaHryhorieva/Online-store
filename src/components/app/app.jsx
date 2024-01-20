import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "src/components/layout/layout";
import { Home } from "src/components/home/home";
import { Catalog } from "src/components/catalog/catalog";
import { CatalogContent } from "src/components/catalog/catalog-content/catalog-content";
import { Error } from "src/components/error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          {
            path: "",
            element: <CatalogContent />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
