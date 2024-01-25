import { NavLink } from "react-router-dom";
import { Image } from "react-datocms";

import { cn } from "@/helpers/helpers";
import { Icon } from "@/components/common/icon/icon";

const Card = ({
  title,
  image,
  price,
  discount,
  colors = [],
  isNew,
  slug,
  isAvailable,
  showAvailability,
}) => {
  const discountPrice = price - price * (discount / 100);
  const colorsToShow = 3;
  const hiddenColorsLength = colors.length - colorsToShow;

  return (
    <div>
      <div className="relative">
        {/* TODO:  */}
        <NavLink className="block" to={`/product/${slug}`}>
          <Image className="!max-w-full" data={image} />
        </NavLink>
        <button className="absolute right-4 top-4" type="button">
          <Icon
            className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
            name="heart"
          />
        </button>
      </div>
      <div className="p-4 pb-0">
        <div className="flex gap-3">
          <div className="flex-grow">
            <p className="text-base uppercase">
              <NavLink className="hover:underline" to={`/product/${slug}`}>
                {title}
              </NavLink>
              {isNew && <span className="text-[--green]"> new</span>}
            </p>
            {Boolean(colors.length) && (
              <div className="mb-10 mt-4 flex items-center">
                <ul className="flex gap-2">
                  {colors.map((color, index) => {
                    const isWhiteColor = color.color.hex === "#FFFFFF";

                    if (index + 1 > colorsToShow) return;

                    return (
                      <li
                        key={index}
                        className={cn(
                          "group flex h-5 w-5 items-center justify-center rounded-full first:border first:border-black/40",
                        )}
                      >
                        <span
                          className={cn(
                            "h-full w-full rounded-full group-first:h-3 group-first:w-3",
                            isWhiteColor && "border border-black/60",
                          )}
                          style={{ backgroundColor: color.color.hex }}
                        />
                      </li>
                    );
                  })}
                </ul>
                {hiddenColorsLength > 0 && (
                  <span className="-mt-0.5 ml-[6px] whitespace-nowrap leading-none text-[#9C9EA9]">
                    +{hiddenColorsLength}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {discount ? (
              <>
                <span className="whitespace-nowrap text-base text-[--red]">
                  {discountPrice} <sup>-{discount}%</sup>
                </span>
                <span className="whitespace-nowrap text-sm text-black/60 line-through">
                  {price} ₴
                </span>
              </>
            ) : (
              <span className="whitespace-nowrap text-sm">{price} ₴</span>
            )}
          </div>
        </div>
        {showAvailability && (
          <div className="mt-2 flex items-center justify-between gap-3">
            {isAvailable ? (
              <>
                <span className="text-[--green]">Є в наявності</span>
                <Icon className="text-[--green]" name="shoppingBag" />
              </>
            ) : (
              <>
                <span className="text-black/60">Немає в наявності</span>
                <button type="button">
                  <Icon
                    className="fill-transparent text-black duration-200 hover:fill-black"
                    name="bell"
                  />
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Card };
