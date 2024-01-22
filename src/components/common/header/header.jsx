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
            <NavLink className="group" to="/account">
              <Icon
                className="fill-transparent duration-200 hover:fill-black group-[.active]:pointer-events-none group-[.active]:fill-black"
                name="user"
              />
            </NavLink>
            <button type="button">
              <Icon
                className="duration-200 hover:text-[--green]"
                name="shoppingBag"
              />
            </button>
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
