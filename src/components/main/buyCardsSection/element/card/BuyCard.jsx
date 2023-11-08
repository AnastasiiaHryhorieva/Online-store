import React, { useMemo } from "react";
import heartIcon from "src/assets/images/icons/heart.svg";
import { Image } from "react-datocms";

export const BuyCard = ({ product }) => {
  const { image } = product;
  const { responsiveImage } = image;

  const saleCard = useMemo(() => {
    console.log(product.discount);
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
    <div className="w-fit relative">
      <div>
        <Image data={responsiveImage} />
        <img
          src={heartIcon}
          alt="heart_icon"
          className="absolute top-4 right-4 "
        />
        <div className="mx-4">
          <div className="flex justify-between text-18 uppercase font-semibold my-4">
            <p className="max-w-[220px]">{product.title}</p>
            {product.salePrice ? saleCard : <p>{product.price} ₴</p>}
          </div>
          <div className="flex gap-2 items-center">
            <button
              className={`inline-block w-5 h-5 bg-[#363333] rounded-full border-slate-500`}
            ></button>
            <button
              className={`inline-block w-5 h-5 bg-[#DBBDA3] rounded-full border-slate-500`}
            ></button>
            <button
              className={`inline-block w-5 h-5 bg-[#595E6C] rounded-full border-slate-500`}
            ></button>
            <p className="text-14 text-[#9C9EA9]">+1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
