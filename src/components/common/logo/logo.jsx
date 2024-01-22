import { NavLink } from "react-router-dom";

import { cn } from "src/helpers/helpers";
import LogoIcon from "src/assets/images/logo.svg?react";

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
