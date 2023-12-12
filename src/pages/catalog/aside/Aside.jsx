import React from "react";
import Categories from "src/components/shared/Categories";
import { asideCategories } from "src/data/asideCategories";

const Aside = () => {
  return (
    <div>
      {asideCategories.map((el) => {
        return <Categories key={el.id} data={el} />;
      })}
    </div>
  );
};

export default Aside;
