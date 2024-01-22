import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/layout/layout";
import { Home } from "@/components/home/home";
import { Catalog } from "@/components/catalog/catalog";
import { CatalogContent } from "@/components/catalog/catalog-content/catalog-content";
import { Account } from "@/components/account/account";
import { Error } from "@/components/error/error";

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
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
