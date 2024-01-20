import { BuyCardsElement } from "./buy-cards-element/buy-cards-element";

const BuyCardsSection = () => {
  return (
    <div>
      {/* TODO */}
      <BuyCardsElement title="Бестселери" category="Bestsellers" />
      <BuyCardsElement title="Sale" category="Sale" />
      <BuyCardsElement title="Новинки" category="New" />
    </div>
  );
};

export { BuyCardsSection };
