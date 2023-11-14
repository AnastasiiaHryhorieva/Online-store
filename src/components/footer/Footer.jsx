import React from "react";

import { Link } from "react-router-dom";

import useLogo from "../../hooks/graphQL/useLogo";
import useSocials from "../../hooks/graphQL/useSocials";

const Footer = () => {
  const socials = useSocials();

  const data = socials;
  const socialsData = data?.allUploads;

  const logo = useLogo("secondary");

  return (
    <footer className="bg-black pt-[120px] text-white">
      <div className="flex justify-around gap-[150px] mb-[50px] max-w-[1046px] m-auto flex-wrap">
        <div>
          <Link to="/">
            <img src={logo?.src} alt={logo?.alt} />
          </Link>
        </div>
        <div className="flex gap-[126px]">
          <section className="flex flex-col gap-6">
            <h4 className="text-[20px] uppercase font-bold">Контакти</h4>
            <ul className="flex flex-col gap-4 opacity-70">
              <li>вул. Бойківська 1, Львів</li>
              <li>пн-сб: 11:00-19:00</li>
              <li>нд: 12:00-18:00</li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <h4 className="text-[20px] uppercase font-bold">Магазин</h4>
            <ul className="flex flex-col gap-4 opacity-70">
              <li>
                <Link to="/suits&bodysuits">Костюми та боді</Link>
              </li>
              <li>
                <Link to="/outerwear">Верхній одяг</Link>
              </li>
              <li>
                <Link to="/underwear">Нижній одяг</Link>
              </li>
              <li>
                <Link to="/new">Новинки</Link>
              </li>
              <li>
                <Link to="/dresses">Сукні</Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-6">
            <h4 className="text-[20px] uppercase font-bold">Наш сервіс</h4>
            <ul className="flex flex-col gap-4 opacity-70">
              <li>
                <Link to="#">Доставка та оплата</Link>
              </li>
              <li>
                <Link to="#">Вхід/Реєстрація</Link>
              </li>
              <li>
                <Link to="#">Відгуки</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="flex gap-4  mb-[132px] max-w-[1046px] m-auto">
        {socialsData?.map((icon) => (
          <Link to="#" key={icon.id}>
            <img src={icon.url} alt={icon.alt} />
          </Link>
        ))}
      </div>
      <div className="flex-center gap-10 pb-5">
        <p className="opacity-70">
          <Link to="#">Політика конфіденційності</Link>
        </p>
        <p className="opacity-70">@ 2023 All right reserved</p>
        <p className="opacity-70">
          <Link to="#">Користувацька згода</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
