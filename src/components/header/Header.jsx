import React from "react";

import { NavLink } from "react-router-dom";

import useMainLogo from "src/hooks/graphQL/useLogo";
import useIcons from "src/hooks/graphQL/useIcons";

const Header = () => {
  const mainLogo = useMainLogo("main");
  const searchIcon = useIcons("search");
  const cartIcon = useIcons("cart");
  const userIcon = useIcons("user");

  const navigation = [
    ["Новинки", "/new"],
    ["Верхній одяг", "/outerwear"],
    ["Нижній одяг", "/undercoat"],
    ["Сукні", "/dresses"],
    ["Костюми та боді", "/suits&bodysuits"],
    ["Sale", "/sale"],
  ];

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
            <img src={mainLogo?.src} alt={mainLogo?.alt} />
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
      <nav className="flex-center flex-wrap">
        {navigation.map(([title, url], i) => (
          <NavLink key={i} className="text-16 mx-[70px] uppercase" to={url}>
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
