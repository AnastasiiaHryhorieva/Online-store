import React, { useMemo } from "react";

import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";
import heartIcon from "src/assets/images/icons/heart.svg";

const BuyCard = ({ product, smallSize }) => {
  const { image } = product;
  const { responsiveImage } = image;

  const saleCard = useMemo(() => {
    return (
      <div>
        <div className="flex text-rose-600 items-center gap-1">
          <p>{product.salePrice}</p>
          <p className="text-10">-{product.discount}%</p>
        </div>
        <p className="text-opacity-60 line-through text-black text-base">
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
            className="absolute top-4 right-4 "
          />
        </NavLink>
        <div className="mx-4">
          <div className="flex justify-between text-18 uppercase font-semibold my-4">
            <p className="max-w-[220px]">{product.title}</p>
            {product.salePrice ? saleCard : <p>{product.price} ₴</p>}
          </div>
          <div className="flex gap-2 items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
