import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeQueries, setActiveQueries] = useState([]);

  useEffect(() => {
    setActiveQueries([]);
    searchParams.forEach((el) => setActiveQueries((arr) => [...arr, el]));
  }, [searchParams]);

  const handleClick = (value, name) => {
    if (searchParams.has(name, value)) {
      searchParams.delete(name);
      setSearchParams(searchParams);
    } else {
      searchParams.set(name, value);
      setSearchParams(searchParams);
    }

    setActiveQueries([]);
    searchParams.forEach((el) => setActiveQueries((arr) => [...arr, el]));
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="mb-4 border px-3 py-2 mr-4">
          <div onClick={() => setIsActive((prevIsActive) => !prevIsActive)}>
            <div className="flex justify-between gap-14">
              <div className="text-18">{data?.title}</div>
              <div>{isActive ? "-" : "+"}</div>
            </div>
          </div>
        </div>
      </div>

      {isActive && (
        <div className="">
          <div className="flex gap-4 mb-8 flex-wrap">
            {data.subtitle.map((el, index) => {
              return (
                <div key={index}>
                  <button
                    className={`text-16 border py-2 px-4 ${
                      activeQueries.includes(el.title) && "bg-black text-white"
                    }
                      `}
                    onClick={(e) => {
                      handleClick(e.target.innerHTML, data.alter, index);
                    }}
                  >
                    {el.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
