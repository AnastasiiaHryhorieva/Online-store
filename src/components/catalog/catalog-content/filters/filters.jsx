import { filters } from "src/data/filters";
import Filter from "src/components/shared/Filter";

const Filters = () => {
  return (
    <div className="flex">
      {filters.map((el) => {
        return <Filter key={el.id} data={el} />;
      })}
    </div>
  );
};

export { Filters };
