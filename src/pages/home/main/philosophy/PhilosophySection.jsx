import React from "react";

import useImage from "src/hooks/graphQL/useImage";

const PhilosophySection = () => {
  const girlImage = useImage("girl_orange");
  const flowersImage = useImage("white_red_pink_flowers");

  return (
    <div className="mb-[150px] max-w-[1140px] mx-auto">
      <div className="flex gap-36">
        <div className="max-w-[390px]">
          <section>
            <p className="mb-[40px] text-40 uppercase">Наша філософія</p>
            <p className="mb-[44px] text-18">
              Наш одяг створений для того, щоб ти незалежно від настрою чи
              ситуації, могла виглядати неперевершено. Могла бути собою, бо Ти і
              є неперевершена. Жити своєю роботою, любити її до кінчиків
              пальців, такий наш підхід
            </p>
          </section>
          <img src={flowersImage?.src} alt={flowersImage?.alt} />
        </div>
        <div className="max-w-[610px] flex flex-col justify-between">
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
    </div>
  );
};

export default PhilosophySection;
