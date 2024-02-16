import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/layout/layout";
import { Home } from "@/components/home/home";
import { Catalog } from "@/components/catalog/catalog";
import { Account } from "@/components/account/account";
import { PersonalInformation } from "@/components/account/personal-information/personal-information";
import { Orders } from "@/components/account/orders/orders";
import { Favorites } from "@/components/account/favorites/favorites";
import { Error } from "@/components/error/error";
import { Product } from "@/components/product/product";
import { Auth } from "@/components/auth/auth";

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
            path: ":category",
          },
          {
            path: ":category/:subcategory",
          },
        ],
      },
      {
        path: "product/:slug",
        element: <Product />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "personal-information",
            element: <PersonalInformation />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <Auth />,
      },
      {
        path: "sign-up",
        element: <Auth />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
