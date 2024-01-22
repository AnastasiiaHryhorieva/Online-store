import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { GraphQLClient, ClientContext } from "graphql-hooks";
import { App } from "@/components/app/app";
import "./index.css";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer fba1f95b075986643c801e5f90df51",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </StrictMode>,
);
