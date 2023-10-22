import React from "react";
import Collection from "./collection/Collection";
import PhilosophySection from "./philosophy/PhilosophySection";
import CategoryCards from "./categoryCards/CategoryCards";

const Main = () => {
  return (
    <main>
      <Collection />
      <PhilosophySection />
      <CategoryCards />
    </main>
  );
};

export default Main;
