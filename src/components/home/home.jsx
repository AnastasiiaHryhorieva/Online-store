import { MainGoods } from "src/components/common/main-goods/main-goods";
import { Subscription } from "src/components/common/subscription/subscription";

import { Collection } from "./collection/collection";
import { Philosophy } from "./philosophy/philosophy";
import { Categories } from "./categories/categories";

const Home = () => {
  return (
    <>
      <Collection />
      <Philosophy />
      <Categories />
      <div className="mb-[120px] flex flex-col gap-y-[75px] lg:gap-y-[120px]">
        <MainGoods title="Бестселери" category="Bestsellers" />
        <MainGoods title="Sale" category="Sale" />
        <MainGoods title="Новинки" category="New" />
      </div>
      <Subscription />
    </>
  );
};

export { Home };
