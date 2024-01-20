import Categories from "src/components/shared/Categories";
import { asideCategories } from "src/data/asideCategories";

const CatalogAside = () => {
  return (
    <aside>
      {asideCategories.map((el) => {
        return <Categories key={el.id} data={el} />;
      })}
    </aside>
  );
};

export { CatalogAside };
