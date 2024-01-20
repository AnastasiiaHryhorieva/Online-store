import { useMemo } from "react";
import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

import heartIcon from "src/assets/images/icons/heart.svg";

const BuyCard = ({ product, smallSize, isNew }) => {
  const { image } = product;
  const { responsiveImage } = image;

  const saleCard = useMemo(() => {
    return (
      <div>
        <div className="flex items-center gap-1 text-rose-600">
          <p>{product.salePrice}</p>
          <p className="text-10">-{product.discount}%</p>
        </div>
        <p className="text-base text-black text-opacity-60 line-through">
          {product.price} ₴
        </p>
      </div>
    );
  }, [product.salePrice, product.discount, product.price]);

  return (
    <div className={` ${smallSize && "w-72"} relative`}>
      <div>
        <Image data={responsiveImage} />
        <NavLink>
          <img
            src={heartIcon}
            alt="heart_icon"
            className="absolute right-4 top-4 h-6 w-6"
          />
        </NavLink>
        <div className="mx-4">
          <div className="text-18 my-4 flex justify-between font-semibold uppercase">
            <p style={{ fontWeight: 400 }} className="max-w-[220px]">
              {product.title}
              {isNew === "New" && (
                <span style={{ marginLeft: 10, color: "#1CCC8F" }}>NEW</span>
              )}
            </p>

            {product.salePrice ? saleCard : <p>{product.price} ₴</p>}
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export { BuyCard };
