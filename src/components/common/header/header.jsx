import { NavLink } from "react-router-dom";

import { navigationItems } from "@/data/navigation-items";
import { Logo } from "@/components/common/logo/logo";
import { Icon } from "@/components/common/icon/icon";
import { SearchModal } from "@/components/common/search-modal/search-modal";
import { CartModal } from "@/components/common/cart-modal/cart-modal";
import { MobileMenu } from "./mobile-menu/mobile-menu";

const Header = () => {
  return (
    <header className="pb-6 pt-4">
      <div className="container">
        <div className="grid grid-cols-[1fr_min-content_1fr] items-center gap-4">
          <div className="flex items-center gap-4">
            <MobileMenu className="lg:hidden" />
            <SearchModal className="mr-auto" />
          </div>

          <Logo className="-mt-2" />

          <div className="ml-auto flex items-center gap-5">
            <NavLink className="group" to="/account">
              <Icon
                className="fill-transparent duration-200 hover:fill-[--green] group-[.active]:pointer-events-none group-[.active]:fill-black"
                name="user"
              />
            </NavLink>

            <CartModal />
          </div>
        </div>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 max-lg:hidden md:gap-x-8 lg:gap-x-[70px]">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              className="link-hover pb-[2px] uppercase"
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
