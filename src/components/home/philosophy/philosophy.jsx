import useImage from "@/hooks/graphql/useImage";

const Philosophy = () => {
  const girlImage = useImage("girl_orange");
  const flowersImage = useImage("white_red_pink_flowers");

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
          <img
            className="mt-[40px]"
            src={flowersImage?.src}
            alt={flowersImage?.alt}
          />
        </div>
        <div className="flex flex-col gap-y-10">
          <img
            className="mb-auto max-md:order-1"
            src={girlImage?.src}
            alt={girlImage?.alt}
          />
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
