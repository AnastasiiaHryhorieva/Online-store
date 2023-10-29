import React from "react";
import BuyCardsElement from "./element/BuyCardsElement";

const BuyCardsSection = () => {
  return (
    <div>
      <BuyCardsElement title="Бестселери" />
      <BuyCardsElement title="Sale" />
      <BuyCardsElement title="Новинки" />
    </div>
  );
};

export default BuyCardsSection;
