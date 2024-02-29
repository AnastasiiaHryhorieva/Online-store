const filters = [
  {
    id: "size",
    title: "Розмір",
    options: [
      { value: "xs", title: "XS" },
      { value: "s", title: "S" },
      { value: "m", title: "M" },
      { value: "l", title: "L" },
      { value: "xl", title: "XL" },
    ],
  },
  {
    id: "color",
    title: "Колір",
    options: [
      { value: "white", title: "Білий", color: "#ffffff" },
      { value: "black", title: "Чорний", color: "#000000" },
      { value: "orange", title: "Помаранчевий", color: "#ff7a00" },
      { value: "pink", title: "Рожевий", color: "#ff32ea" },
    ],
  },
  {
    id: "price",
    title: "Ціна",
    options: [
      { value: "0-499", title: "До 500₴" },
      { value: "500-999", title: "Від 500₴ до 1000₴" },
      { value: "1000-1999", title: "Від 1000₴ до 2000₴" },
      { value: "2000", title: "Від 2000₴" },
    ],
  },
  {
    id: "season",
    title: "Сезон",
    options: [
      { value: "winter", title: "Зима" },
      { value: "spring", title: "Весна" },
      { value: "summer", title: "Літо" },
      { value: "fall", title: "Осінь" },
    ],
  },
];

export { filters };
