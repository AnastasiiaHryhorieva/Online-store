import React from "react";

import tempBig from "src/assets/images/temp_big.png";
import tempSmall from "src/assets/images/temp_small.png";
import useImage from "../../../hooks/graphQL/useImage";

const PhilosophySection = () => {
  const girlImage = useImage("girl_orange");
  const flowersImage = useImage("white_red_pink_flowers");

  console.log(flowersImage);

  return (
    <div className="px-[150px] mb-[150px]">
      <div className="grid grid-cols-2 gap-36 mb">
        <div>
          <section>
            <p className="mb-10 text-40 uppercase">Наша філософія</p>
            <p className="text-18 mb-[71px] max-w-[390px]">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper odio faucibus
              mus ut molestie. Facilisis non et leo sed quis id risus. Elit
              lobortis faucibus amet arcu hendrerit nam at. Sit varius tincidunt
              tortor aenean est tellus sociis viverra.
            </p>
          </section>
          <img src={flowersImage?.src} alt={flowersImage?.alt} />
        </div>
        <div>
          <img
            src={girlImage?.src}
            alt={girlImage?.alt}
            className="mb-[109px]"
          />
          <section>
            <p className="text-18 max-w-[426px]">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper odio faucibus
              mus ut molestie. Facilisis non et leo sed quis id risus. Elit
              lobortis faucibus amet arcu hendrerit nam at. Sit varius tincidunt
              tortor aenean est tellus sociis viverra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
