import React from "react";
import Cards from "./cards/Cards";
import Filters from "./filters/Filters";

const Main = () => {
  return (
    <div className="flex flex-col">
      <h1>Каталог</h1>
      <Filters />
      <Cards />
    </div>
  );
};

export default Main;
