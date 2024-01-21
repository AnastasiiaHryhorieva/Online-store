import { NavLink } from "react-router-dom";
import { Image } from "react-datocms";

import { cn } from "src/helpers/helpers";
import { Icon } from "src/components/common/icon/icon";

// TODO: add colors to product in cms
// const colors = [
//   {
//     active: true,
//     title: "Білий",
//     code: "#fff",
//   },
//   {
//     title: "Чорний",
//     code: "#000",
//   },
//   {
//     title: "Червоний",
//     code: "red",
//   },
//   {
//     title: "Сірий",
//     code: "rgba(0, 0, 0, 0.2)",
//   },
// ];

const Card = ({ title, image, price, discount, colors = [] }) => {
  const discountPrice = price - price * (discount / 100);
  const colorsToShow = 3;
  const hiddenColorsLength = colors.length - colorsToShow;

  return (
    <div>
      <div className="relative">
        <NavLink className="block" to="#">
          <Image className="!max-w-full" data={image} />
        </NavLink>
        <button className="absolute right-4 top-4" type="button">
          <Icon
            className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
            name="heart"
          />
        </button>
      </div>
      <div className="flex gap-3 p-4 pb-0">
        <div className="flex-grow">
          <NavLink className="text-base uppercase hover:underline" to="#">
            {title}
          </NavLink>
          {Boolean(colors.length) && (
            <div className="mb-10 mt-4 flex items-center">
              <ul className="flex gap-2">
                {colors.map((color, index) => {
                  const isWhiteColor = color.title === "Білий";

                  if (index + 1 > colorsToShow) return;

                  return (
                    <li
                      key={color.title}
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full border border-black/40",
                        !color.active && !isWhiteColor && "border-none",
                      )}
                      title={color.title}
                    >
                      <span
                        className={cn(
                          "h-full w-full rounded-full",
                          color.active && "h-3 w-3",
                          color.active &&
                            isWhiteColor &&
                            "border border-black/60",
                        )}
                        style={{ backgroundColor: color.code }}
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
    </div>
  );
};

export { Card };
