import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { filters } from "@/data/filters";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/common/icon/icon";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const FiltersMobile = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilterOptions = Array.from(searchParams.values());

  const handleToggleFilter = (index) => {
    if (index === activeFilter) {
      setShowFilterOptions(!showFilterOptions);
      return;
    }

    setShowFilterOptions(true);
    setActiveFilter(index);
  };

  const handleClearFilters = () => {
    setShowFilterOptions(false);
    setSearchParams({}, { preventScrollReset: true });
  };

  const handleSearchParams = (key, value) => {
    if (searchParams.has(key, value)) {
      searchParams.delete(key, value);
      setSearchParams(searchParams, { preventScrollReset: true });
      return;
    }

    // reset pagination
    if (searchParams.has("page")) {
      searchParams.delete("page");
    }

    searchParams.append(key, value);
    setSearchParams(searchParams, { preventScrollReset: true });
  };

  return (
    <Dialog>
      <div className="flex items-center justify-between gap-4">
        <DialogTrigger className="flex h-10 items-center justify-between gap-4 border border-current px-3 py-2">
          Фільтри
          <Icon name="filters" />
        </DialogTrigger>
        <Select
          value={searchParams.get("sort") || ""}
          onValueChange={(value) => {
            searchParams.set("sort", value);
            setSearchParams(searchParams, { preventScrollReset: true });
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Сортувати" />
          </SelectTrigger>
          <SelectContent sideOffset={8}>
            <SelectItem value="_createdAt_ASC">По новизні</SelectItem>
            <SelectItem value="price_ASC">Від дешевших</SelectItem>
            <SelectItem value="price_DESC">Від дорогих</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DialogContent className="max-h-[100vh] w-[300px] overflow-auto px-10 pb-5 pt-10">
        <div className="space-y-4">
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
                  "flex h-10 w-full items-center border border-black px-3 py-2 leading-none duration-200",
                  activeFilter === index &&
                    showFilterOptions &&
                    "bg-black text-white",
                  Boolean(count) && "bg-black text-white",
                )}
                type="button"
                onClick={() => handleToggleFilter(index)}
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
        </div>
        <div
          className={cn(
            "grid grid-rows-[0fr] pt-0 opacity-0 duration-200 ease-linear",
            showFilterOptions && "grid-rows-[1fr] opacity-100",
          )}
        >
          <ToggleGroup
            className="flex-wrap justify-start gap-4 overflow-hidden"
            type="multiple"
            value={activeFilterOptions}
          >
            {filters[activeFilter].options.map((option) => {
              const hasColor = filters[activeFilter].id === "color";

              return (
                <ToggleGroupItem
                  key={option.value}
                  className="h-10 rounded-none border border-black/30 px-4 py-2 text-xs hover:bg-transparent hover:text-current data-[state=on]:bg-black data-[state=on]:text-white"
                  value={option.value}
                  onClick={() =>
                    handleSearchParams(filters[activeFilter].id, option.value)
                  }
                >
                  {hasColor && (
                    <span
                      className="mr-2 h-4 w-4 rounded-full border"
                      style={{ backgroundColor: option.color }}
                    />
                  )}
                  {option.title}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1.5">
          <DialogClose asChild>
            <button
              className="flex h-10 w-full items-center justify-center border border-black"
              type="button"
            >
              Застосувати
            </button>
          </DialogClose>
          <button
            className="flex h-10 w-full items-center justify-center"
            type="button"
            onClick={handleClearFilters}
          >
            Очистити фільтр
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { FiltersMobile };
