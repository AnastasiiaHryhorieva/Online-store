import { MainGoods } from "@/components/common/main-goods/main-goods";
import { Subscription } from "@/components/common/subscription/subscription";
import { Portal } from "@/components/ui/portal";

import { Collection } from "./collection/collection";
import { Philosophy } from "./philosophy/philosophy";
import { Categories } from "./categories/categories";

const container = document.getElementById("header");

const Home = () => {
  return (
    <>
      <Portal className="-order-1" container={container}>
        <div className="h-[30px] w-full bg-black text-center text-white max-lg:hidden">
          при замовлені від 1 600 ₴ - безкоштовна доставка кур’єром
        </div>
      </Portal>
      <Collection />
      <Philosophy />
      <Categories />
      <div className="mb-[60px] flex flex-col gap-y-[60px] md:mb-[115px] lg:gap-y-[115px]">
        <MainGoods title="Бестселери" category="bestsellers" />
        <MainGoods title="Sale" category="sale" />
        <MainGoods title="Новинки" category="new" />
      </div>
      <Subscription />
    </>
  );
};

export { Home };
