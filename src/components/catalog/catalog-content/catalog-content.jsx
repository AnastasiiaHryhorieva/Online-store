import { Filters } from "./filters/filters";
import { Cards } from "./cards/cards";

const CatalogContent = () => {
  return (
    <section>
      <h1>Каталог</h1>
      <Filters />
      <Cards />
    </section>
  );
};

export { CatalogContent };
