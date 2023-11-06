import React from "react";
import Button from "../../shared/Button";

const Collection = () => {
  return (
    <div className="bg-collection-bg bg-no-repeat bg-cover mb-[150px] bg-center">
      <section className="pt-[400px] flex-center flex-col">
        <p className="text-100 text-stroke__black mb-9 text-center uppercase max-w-2xl pt-4">
          SS'2023 Collection
        </p>
        <Button />
      </section>
    </div>
  );
};

export default Collection;
