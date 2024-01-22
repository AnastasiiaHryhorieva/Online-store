import { NavLink } from "react-router-dom";

import { cn } from "@/helpers/helpers";

const Breadcrumbs = ({ links }) => {
  return (
    <ol className="flex flex-wrap items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) =>
              cn(
                "text-[16px] leading-normal hover:underline",
                isActive && "pointer-events-none text-black/50",
              )
            }
            to={link.href}
            end
          >
            {link.title}
          </NavLink>
          {index < links.length - 1 && <span>&nbsp;/&nbsp;</span>}
        </li>
      ))}
    </ol>
  );
};

export { Breadcrumbs };
