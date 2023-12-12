import React from "react";

import { NavLink } from "react-router-dom";

import useMainLogo from "src/hooks/graphQL/useLogo";
import useIcons from "src/hooks/graphQL/useIcons";
import { navigation } from "src/data/headerNavigation";

const Header = () => {
  const mainLogo = useMainLogo("main");
  console.log(mainLogo);
  const searchIcon = useIcons("search");
  const cartIcon = useIcons("cart");
  const userIcon = useIcons("user");

  return (
    <header className="mt-4 mb-6">
      <div className="flex-between pt-2 mb-6">
        <div className="ml-36">
          <NavLink to="#">
            <img src={searchIcon?.url} alt={searchIcon?.alt} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <img src={mainLogo?.responsiveImage?.src} alt={mainLogo?.alt} />
          </NavLink>
        </div>
        <div className="mr-36">
          <div className="flex-center">
            <NavLink to="#" className="mx-5">
              <img src={userIcon?.url} alt={userIcon?.alt} />
            </NavLink>
            <NavLink to="#">
              <img src={cartIcon?.url} alt={cartIcon?.alt} />
            </NavLink>
          </div>
        </div>
      </div>
      <nav className="flex-center flex-wrap gap-[70px]">
        {navigation.map((el) => (
          <NavLink key={el.id} className="text-16 uppercase" to={el.url}>
            {el.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
