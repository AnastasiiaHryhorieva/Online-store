export const filters = [
  {
    id: 0,
    title: "Розмір",
    alter: "size",
    subtitle: [
      { id: 0, title: "XS" },
      { id: 1, title: "S" },
      { id: 2, title: "M" },
      { id: 3, title: "L" },
      { id: 4, title: "XL" },
      { id: 5, title: "XXL" },
    ],
    selected: false,
  },
  {
    id: 1,
    title: "Колір",
    alter: "color",
    subtitle: [
      { id: 0, title: "Помаранчевий", colorRGBA: "" },
      { id: 1, title: "Чорний", colorRGBA: "" },
      { id: 2, title: "Рожевий", colorRGBA: "" },
    ],
  },
  {
    id: 2,
    title: "Ціна",
    alter: "price",
    subtitle: [
      { id: 0, title: "До 500₴" },
      { id: 1, title: "Від 500₴ до 1000₴" },
      { id: 2, title: "Від 1000₴ до 2000₴" },
      { id: 3, title: "Від 2000₴" },
    ],
  },
  {
    id: 3,
    title: "Сезон",
    alter: "season",
    subtitle: [
      { id: 0, title: "Зима" },
      { id: 1, title: "Весна" },
      { id: 2, title: "Літо" },
      { id: 3, title: "Осінь" },
    ],
  },
  {
    id: 4,
    title: "Сортувати",
    alter: "sort by",
    subtitle: [
      { id: 0, title: "По зростанню" },
      { id: 1, title: "По спаданню" },
    ],
  },
];
