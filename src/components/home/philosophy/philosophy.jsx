import useImage from "src/hooks/graphQL/useImage";

const Philosophy = () => {
  const girlImage = useImage("girl_orange");
  const flowersImage = useImage("white_red_pink_flowers");

  return (
    <section className="mx-auto mb-[150px] max-w-[1140px]">
      <div className="flex gap-36">
        <div className="max-w-[390px]">
          <section>
            <p className="text-40 mb-[40px] uppercase">Наша філософія</p>
            <p className="text-18 mb-[44px]">
              Наш одяг створений для того, щоб ти незалежно від настрою чи
              ситуації, могла виглядати неперевершено. Могла бути собою, бо Ти і
              є неперевершена. Жити своєю роботою, любити її до кінчиків
              пальців, такий наш підхід
            </p>
          </section>
          <img src={flowersImage?.src} alt={flowersImage?.alt} />
        </div>
        <div className="flex max-w-[610px] flex-col justify-between">
          <img src={girlImage?.src} alt={girlImage?.alt} className="w-{610}" />
          <section>
            <p className="text-18 max-w-[500px]">
              Майже всі речі з наших колекцій легко поєднуються між собою за
              стилем та кольоровою гамою. Ви можете міксувати різні силуети і
              кольори. Комфортний образ зробить твій день кращим, а тебе
              впевненішою. Один день, але різна ти, з Мocko можливо все
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export { Philosophy };
