import { Outlet } from "react-router-dom";

import { Subscription } from "src/components/common/subscription/subscription";
import { CatalogAside } from "./catalog-aside/catalog-aside";

const Catalog = () => {
  return (
    <>
      <div className="mx-36 flex justify-center gap-16">
        <CatalogAside />
        <Outlet />
      </div>
      <Subscription />
    </>
  );
};

export { Catalog };
