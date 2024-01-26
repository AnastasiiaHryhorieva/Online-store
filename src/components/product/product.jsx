import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Icon } from "@/components/common/icon/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Product = () => {
  return (
    <section className="pb-[150px] pt-4">
      <div className="container">
        <Breadcrumbs />

        <div className="mt-10 grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h1 className="mb-2.5 text-title">Hello Product!</h1>
            <span className="mb-2.5 text-[32px] font-bold">650₴</span>
            <span className="mb-4 text-base text-[--green]">Є в наявності</span>

            <Accordion type="multiple" collapsible={false}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-5">
                  Опис товару
                </AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  Лонгслів з прозорої сітки. Можна носити розмір в розмір і буде
                  облягати, або взяти більший для розлабленого ефекту.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="py-5">Склад</AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  Лонгслів з прозорої сітки. Можна носити розмір в розмір і буде
                  облягати, або взяти більший для розлабленого ефекту.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="py-5">
                  Догляд за річчю
                </AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  Рекомендуємо ручне прання. Не відбілювати та не сушити в
                  сушарці барабанного типу. Краще віддати перевагу відпарюванню,
                  а не прасуванню. Не чистити хімічно.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <img src="https://placehold.co/480x600" alt="#" />
          </div>

          <div className="flex flex-col gap-10">
            <span className="text-base">Оберіть розмір</span>
            <span className="text-base">Оберіть колір</span>

            <div className="mt-auto flex items-center gap-3">
              <button className="button rounded-[3px] px-5 py-10" type="button">
                Додати до Кошика
              </button>
              <button type="button">
                <Icon
                  className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
                  name="heart"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Product };
