import React from "react";

import BuyCardsElement from "./element/BuyCardsElement";

const BuyCardsSection = () => {
  return (
    <div>
      <BuyCardsElement title="Бестселери" category="Bestsellers" />
      <BuyCardsElement title="Sale" category="Sale" />
      <BuyCardsElement title="Новинки" category="New" />
    </div>
  );
};

export default BuyCardsSection;
