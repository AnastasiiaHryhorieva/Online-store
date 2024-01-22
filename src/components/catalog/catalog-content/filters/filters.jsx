import { filters } from "@/data/filters";
import Filter from "@/components/shared/Filter";

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
