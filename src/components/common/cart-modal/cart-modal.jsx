import { NavLink } from "react-router-dom";

import { Icon } from "@/components/common/icon/icon";
import { CartCard } from "@/components/common/cart-card/cart-card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const CartModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button">
          <Icon
            className="duration-200 hover:fill-[--green]"
            name="shoppingBag"
          />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 p-0 max-sm:w-full sm:max-w-[520px]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-2 px-10 pt-[60px]">
          <h2 className="text-[32px]">
            Кошик
            <span className="text-[28px]"> (3)</span>
          </h2>
          <SheetClose asChild>
            <NavLink className="link-hover" to="/account/favorites">
              Перейти до улюбленого
            </NavLink>
          </SheetClose>
        </div>

        <ScrollArea className="mr-2 flex-grow pl-10 pr-6" type="always">
          <div className="grid gap-6">
            <CartCard
              title="Джемпер COZY"
              price="890"
              color="Білий"
              size="S"
              isNew
            />
            <CartCard
              title="Боді JOSELIN"
              price="460"
              color="Чорний"
              size="XS"
            />
            <CartCard
              title="Жилет MY LOVE"
              price="1700"
              discount={10}
              color="Чорний"
              size="S"
            />
          </div>
        </ScrollArea>
        <div className="px-10 pb-10">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-x-3">
            <span>Разом</span>
            <span>4300₴</span>
          </div>
          <div className="mb-1 flex flex-wrap items-center justify-between gap-x-3">
            <span>Доставка</span>
            <span className="text-[--green]">0₴</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-3 font-bold">
            <span className="text-base_l">Сума до сплати</span>
            <span className="text-[22px]">4300₴</span>
          </div>

          <SheetClose asChild>
            <Button
              className="mt-6 w-full border-[--green] bg-[--green] text-[20px] uppercase text-white  hover:text-[--green]"
              variant="outlineReverse"
              type="button"
            >
              Оплатити замовлення
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { CartModal };
