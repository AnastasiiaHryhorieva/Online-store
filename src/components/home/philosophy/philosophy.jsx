import { Image } from "react-datocms/image";

import { useImageByTitle } from "@/hooks/graphql/useImageByTitle";

const Philosophy = () => {
  const { loading: flowersLoading, data: flowers } =
    useImageByTitle("philosophy left");
  const { loading: girlLoading, data: girl } =
    useImageByTitle("philosophy right");

  return (
    <section className="my-[75px] md:my-[150px]">
      <div className="container grid gap-y-10 md:grid-cols-[35%_55%] md:gap-x-[10%]">
        <div>
          <h2 className="mb-[40px] text-title uppercase">Наша філософія</h2>
          <p className="text-base">
            Наш одяг створений для того, щоб ти незалежно від настрою чи
            ситуації, могла виглядати неперевершено. Могла бути собою, бо Ти і є
            неперевершена. Жити своєю роботою, любити її до кінчиків пальців,
            такий наш підхід.
          </p>
          {!flowersLoading && <Image className="mt-10" data={flowers} />}
        </div>
        <div className="flex flex-col gap-y-10">
          {!girlLoading && (
            <Image className="mb-auto max-md:order-1" data={girl} />
          )}
          <p className="max-w-[500px] text-base">
            Майже всі речі з наших колекцій легко поєднуються між собою за
            стилем та кольоровою гамою. Ви можете міксувати різні силуети і
            кольори. Комфортний образ зробить твій день кращим, а тебе
            впевненішою. Один день, але різна ти, з Мocko можливо все.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Philosophy };
