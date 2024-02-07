import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { getBreadcrumbLabel } from "@/helpers/helpers";

const Breadcrumbs = ({ className, urls }) => {
  const { pathname } = useLocation();

  const paths = ["/"];
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  pathSegments.map((segment, index) =>
    paths.push(`/${pathSegments.slice(0, index + 1).join("/")}`),
  );

  if (urls) {
    return (
      <ol className={cn("flex flex-wrap items-center", className)}>
        {urls.map((url, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "text-sm leading-normal hover:underline",
                  isActive && "pointer-events-none text-black/50",
                )
              }
              to={url.href}
              end
            >
              {url.label}
            </NavLink>
            {index < urls.length - 1 && <span>&nbsp;/&nbsp;</span>}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("flex flex-wrap items-center", className)}>
      {paths.map((path, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) =>
              cn(
                "text-sm leading-normal hover:underline",
                isActive && "pointer-events-none text-black/50",
              )
            }
            to={path}
            end
          >
            {getBreadcrumbLabel(path)}
          </NavLink>
          {index < paths.length - 1 && <span>&nbsp;/&nbsp;</span>}
        </li>
      ))}
    </ol>
  );
};

export { Breadcrumbs };
