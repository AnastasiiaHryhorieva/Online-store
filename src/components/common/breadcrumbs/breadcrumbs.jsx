import { NavLink, useLocation } from "react-router-dom";

import { cn, getBreadcrumbLabel } from "@/helpers/helpers";

const Breadcrumbs = ({ className }) => {
  const { pathname } = useLocation();

  const breadcrumbPaths = ["/"];
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  pathSegments.map((segment, index) =>
    breadcrumbPaths.push(`/${pathSegments.slice(0, index + 1).join("/")}`),
  );

  return (
    <ol className={cn("flex flex-wrap items-center", className)}>
      {breadcrumbPaths.map((path, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) =>
              cn(
                "text-[16px] leading-normal hover:underline",
                isActive && "pointer-events-none text-black/50",
              )
            }
            to={path}
            end
          >
            {getBreadcrumbLabel(path)}
          </NavLink>
          {index < breadcrumbPaths.length - 1 && <span>&nbsp;/&nbsp;</span>}
        </li>
      ))}
    </ol>
  );
};

export { Breadcrumbs };
