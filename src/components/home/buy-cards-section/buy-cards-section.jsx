import { BuyCardsElement } from "./buy-cards-element/buy-cards-element";

{
  /* TODO: remove this folder */
}
const BuyCardsSection = () => {
  return (
    <div>
      <BuyCardsElement title="Бестселери" category="Bestsellers" />
      <BuyCardsElement title="Sale" category="Sale" />
      <BuyCardsElement title="Новинки" category="New" />
    </div>
  );
};

export { BuyCardsSection };
