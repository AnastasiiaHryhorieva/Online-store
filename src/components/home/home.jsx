import { Subscription } from "src/components/common/subscription/subscription";

import { Collection } from "./collection/collection";
import { Philosophy } from "./philosophy/philosophy";
import { Categories } from "./categories/categories";
import { BuyCardsSection } from "./buy-cards-section/buy-cards-section";

const Home = () => {
  return (
    <>
      <Collection />
      <Philosophy />
      <Categories />
      <BuyCardsSection />
      <Subscription />
    </>
  );
};

export { Home };
