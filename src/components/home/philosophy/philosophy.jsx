const Philosophy = () => {
  return (
    <section className="my-[60px] lg:my-[115px]">
      <div className="container grid grid-rows-[min-content] gap-y-6 md:gap-x-[10%] md:gap-y-10 lg:grid-cols-[35%_55%]">
        <div className="grid grid-rows-[min-content_1fr] gap-x-6 max-lg:grid-cols-2">
          <h2 className="mb-6 text-[28px] uppercase max-md:col-span-full max-md:text-center md:text-title">
            Наша філософія
          </h2>
          <img
            className="w-full md:max-lg:row-span-full lg:order-last"
            src="/img/philosophy-flowers.jpg"
            alt="flowers"
          />
          <p className="text-pretty text-xs sm:text-base lg:mb-10">
            Наш одяг створений для того, щоб ти незалежно від настрою чи
            ситуації, могла виглядати неперевершено. Могла бути собою, бо Ти і є
            неперевершена. Жити своєю роботою, любити її до кінчиків пальців,
            такий наш підхід.
          </p>
        </div>
        <div className="grid gap-6 md:max-lg:grid-cols-[3fr_5fr] lg:gap-10">
          <img
            className="w-full md:order-1 lg:-order-1"
            src="/img/philosophy-girl.jpg"
            alt="girl"
          />
          <p className="text-pretty max-w-[500px] text-xs sm:text-base lg:mt-auto">
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
