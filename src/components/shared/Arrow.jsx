import React from "react";
import useIcons from "@/hooks/graphQL/useIcons";

const Arrow = () => {
  const arrowIcon = useIcons("arrow");

  return <img src={arrowIcon?.url} alt={arrowIcon?.alt} />;
};

export default Arrow;
