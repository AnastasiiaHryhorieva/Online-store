import { NavLink } from "react-router-dom";

import { navigationItems } from "@/data/navigation-items";
import { Logo } from "@/components/common/logo/logo";
import { Icon } from "@/components/common/icon/icon";

const Header = () => {
  return (
    <header className="pb-6 pt-4">
      <div className="container">
        <div className="mb-6 grid grid-cols-[1fr_min-content_1fr] items-center gap-4">
          {/* TODO: create popup with search form */}
          <NavLink className="mr-auto" to="#">
            <Icon className="duration-200 hover:text-[--green]" name="search" />
          </NavLink>

          <Logo />

          <div className="ml-auto flex items-center gap-5">
            <NavLink to="/account">
              <Icon className="duration-200 hover:text-[--green]" name="user" />
            </NavLink>
            <NavLink to="#">
              <Icon
                className="duration-200 hover:text-[--green]"
                name="shoppingBag"
              />
            </NavLink>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 lg:gap-x-[70px]">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              className="text-16 relative pb-[2px] uppercase after:absolute after:left-1/2 after:top-full after:h-[1px] after:w-0 after:bg-current after:duration-200 after:content-[''] hover:after:left-0 hover:after:w-full"
              to={item.url}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export { Header };
