import React from "react";
import Collection from "./collection/Collection";
import PhilosophySection from "./philosophy/PhilosophySection";
import CategoryCards from "./categoryCards/CategoryCards";
import BuyCardsSection from "./buyCardsSection/BuyCardsSection";
import Maillist from "./maillist/Maillist";

const Main = () => {
  return (
    <main>
      <Collection />
      <PhilosophySection />
      <CategoryCards />
      <BuyCardsSection />
      <Maillist />
    </main>
  );
};

export default Main;
