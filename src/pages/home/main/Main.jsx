import React from "react";

import BuyCardsSection from "./buyCardsSection/BuyCardsSection";

import CategoryCards from "./categoryCards/CategoryCards";

import Collection from "./collection/Collection";

import Maillist from "./maillist/Maillist";

import PhilosophySection from "./philosophy/PhilosophySection";

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
