import React from "react";
import { searchIcon, shopCartIcon, userIcon } from "./header_icons";
import logo from "src/assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
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
          <img src={searchIcon} alt="search-icon" />
        </div>
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="mr-36">
          <div className="flex-center">
            <img src={userIcon} alt="user-icon" className="mx-5" />
            <img src={shopCartIcon} alt="shopcart-icon" />
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
