import React from "react";
import heartIcon from "src/assets/images/icons/heart.svg";

const BuyCard = (props) => {
  return (
    <div className="w-fit relative">
      <div>
        <img src={props.image} alt="image" />
        <img
          src={heartIcon}
          alt="heart_icon"
          className="absolute top-4 right-4 "
        />
        <div className="mx-4">
          <div className="flex justify-between text-18 uppercase font-semibold my-4">
            <p className="max-w-[220px]">{props.title}</p>
            <p>{props.price}</p>
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

export default BuyCard;
