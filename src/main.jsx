import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GraphQLClient, ClientContext } from "graphql-hooks";

import "./index.css";
import router from "./routes";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer 90c4dc302cbe36d790dcec6ca3929c",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  </React.StrictMode>
);
