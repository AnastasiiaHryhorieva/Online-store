import Categories from "@/components/shared/Categories";
import { asideCategories } from "@/data/asideCategories";

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
