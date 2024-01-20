import { Subscription } from "src/components/common/subscription/subscription";

import { Collection } from "./collection/collection";
import { Philosophy } from "./philosophy/philosophy";
import { CategoryCards } from "./category-cards/category-cards";
import { BuyCardsSection } from "./buy-cards-section/buy-cards-section";

const Home = () => {
  return (
    <>
      <Collection />
      <Philosophy />
      <CategoryCards />
      <BuyCardsSection />
      <Subscription />
    </>
  );
};

export { Home };
