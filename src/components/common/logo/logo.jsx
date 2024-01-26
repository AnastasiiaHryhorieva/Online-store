import { NavLink } from "react-router-dom";

import { cn } from "@/helpers/helpers";
import LogoIcon from "@/assets/img/logo.svg?react";

const Logo = ({ className }) => {
  return (
    <NavLink className={cn("inline-block", className)} to="/">
      <LogoIcon
        className="fill-current"
        width="145"
        height="39"
        aria-label="Mocko"
      />
    </NavLink>
  );
};

export { Logo };
