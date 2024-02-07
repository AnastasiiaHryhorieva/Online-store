import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterXIcon } from "lucide-react";

import { filters } from "@/data/filters";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/common/icon/icon";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// TODO: after refresh page need set activeFilterOptions from searchParams
const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [activeFilterOptions, setActiveFilterOptions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleFilter = (index) => {
    if (index === activeFilter) {
      setShowFilterOptions(!showFilterOptions);
      return;
    }

    setShowFilterOptions(true);
    setActiveFilter(index);
  };

  const handleClearFilters = () => {
    setActiveFilterOptions([]);
    setShowFilterOptions(false);
    setSearchParams({});
  };

  const handleSearchParams = (key, value) => {
    if (searchParams.has(key, value)) {
      searchParams.delete(key, value);
      setSearchParams(searchParams);
      return;
    }

    searchParams.append(key, value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {filters.map((filter, index) => {
          let count = 0;

          filter.options.forEach((option) => {
            if (activeFilterOptions.includes(option.value)) {
              count++;
            }
          });

          return (
            <button
              key={filter.id}
              className={cn(
                "flex h-10 min-w-[140px] items-center border border-black px-3 py-2 leading-none duration-200",
                activeFilter === index &&
                  showFilterOptions &&
                  "bg-black text-white",
                Boolean(count) && "bg-black text-white",
              )}
              type="button"
              onClick={(e) => handleToggleFilter(index)}
            >
              <span>{filter.title}</span>&nbsp;
              {Boolean(count) && <span>({count})</span>}
              <Icon
                className={cn(
                  "ml-auto duration-200",
                  activeFilter === index && showFilterOptions && "rotate-180",
                )}
                name="arrowDown"
                size={16}
              />
            </button>
          );
        })}
        <button
          className="flex h-10 w-10 items-center justify-center border border-black"
          type="button"
          title="Очистити фільтри"
          aria-label="Очистити фільтри"
          onClick={handleClearFilters}
        >
          <FilterXIcon size={16} />
        </button>
      </div>

      <div
        className={cn(
          "grid grid-rows-[0fr] pt-0 opacity-0 duration-200 ease-linear",
          showFilterOptions && "grid-rows-[1fr] pt-4 opacity-100",
        )}
      >
        <ToggleGroup
          className="flex-wrap justify-start gap-4 overflow-hidden"
          type="multiple"
          value={activeFilterOptions}
          onValueChange={(value) => setActiveFilterOptions(value)}
        >
          {filters[activeFilter].options.map((option) => {
            const hasColor = filters[activeFilter].id === "color";

            return (
              <ToggleGroupItem
                key={option.value}
                className="h-10 rounded-none border border-black/30 px-4 py-2 text-xs hover:bg-transparent hover:text-current data-[state=on]:bg-black data-[state=on]:text-white"
                value={option.value}
                onClick={(e) =>
                  handleSearchParams(filters[activeFilter].id, option.value)
                }
              >
                {hasColor && (
                  <span
                    className="border-current/10 mr-2 h-4 w-4 rounded-full border"
                    style={{ backgroundColor: option.color }}
                  />
                )}
                {option.title}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
    </div>
  );
};

export { Filters };
