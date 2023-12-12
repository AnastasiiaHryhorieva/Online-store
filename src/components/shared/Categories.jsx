import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const afterCategory = useMemo(() => {
    return <div>{isActive ? "-" : "+"}</div>;
  }, [isActive]);

  return (
    <div className="mb-6 flex-col gap-2 flex min-w-[161px]">
      <div
        className="flex gap-4"
        onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
      >
        {data?.subcategory ? (
          <div className="text-18 uppercase">{data?.category}</div>
        ) : (
          <NavLink
            to={data?.url}
            className="text-18 uppercase focus:underline focus:font-bold"
          >
            {data?.category}
          </NavLink>
        )}
        {data?.subcategory && afterCategory}
      </div>
      {isActive && (
        <div className="flex flex-col gap-2">
          {data.subcategory?.map((el, index) => {
            return (
              <div key={index}>
                <NavLink
                  className="text-16 focus:underline focus:font-bold"
                  to="#"
                >
                  {el.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
