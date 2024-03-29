import { MainGoods } from "@/components/common/main-goods/main-goods";
import { Subscription } from "@/components/common/subscription/subscription";

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
        <MainGoods title="Бестселери" category="bestsellers" />
        <MainGoods title="Sale" category="sale" />
        <MainGoods title="Новинки" category="new" />
      </div>
      <Subscription />
    </>
  );
};

export { Home };
