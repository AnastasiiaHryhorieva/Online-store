import { Link } from "react-router-dom";

import { Logo } from "@/components/common/logo/logo";
import { Icon } from "@/components/common/icon/icon";

const Footer = () => {
  return (
    <footer className="bg-black pb-4 pt-[120px] text-white">
      <div className="container">
        <div className="mb-[120px] grid gap-16 max-md:mb-16 max-md:justify-center max-md:justify-items-center md:grid-cols-[min-content_1fr]">
          <div className="">
            <Logo />

            <div className="mt-6 flex gap-4 md:mt-16">
              <Link
                className="duration-200 hover:text-[--green] focus-visible:text-[--green]"
                to="#"
              >
                <Icon size={40} name="instagram" />
              </Link>
              <Link
                className="duration-200 hover:text-[--green] focus-visible:text-[--green]"
                to="#"
              >
                <Icon size={40} name="twitter" />
              </Link>
              <Link
                className="duration-200 hover:text-[--green] focus-visible:text-[--green]"
                to="#"
              >
                <Icon size={40} name="facebook" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 sm:max-md:justify-center md:ml-auto md:gap-x-16 lg:gap-x-28">
            <div>
              <h2 className="mb-6 text-[20px] font-bold uppercase">Контакти</h2>
              <Link
                className="link-hover mb-8 inline-block text-base leading-[normal] opacity-70"
                to="tel:+380970458414"
              >
                +380 97 045 8414
              </Link>
              <ul className="space-y-4 opacity-70">
                <li>вул. Бойківська 1, Львів</li>
                <li>пн-сб: 11:00-19:00</li>
                <li>нд: 12:00-18:00</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[20px] font-bold uppercase">Магазин</h2>
              <ul className="space-y-4 opacity-70">
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="/suits_bodysuits"
                  >
                    Костюми та боді
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="/outerwear"
                  >
                    Верхній одяг
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="/undercoat"
                  >
                    Нижній одяг
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="/new"
                  >
                    Новинки
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="/dresses"
                  >
                    Сукні
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[20px] font-bold uppercase">
                Наш сервіс
              </h2>
              <ul className="space-y-4 opacity-70">
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="#"
                  >
                    Доставка та оплата
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="#"
                  >
                    Вхід/Реєстрація
                  </Link>
                </li>
                <li>
                  <Link
                    className="link-hover text-base leading-[normal]"
                    to="#"
                  >
                    Відгуки
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70 max-md:flex-col">
          <Link className="link-hover" to="#">
            Політика конфіденційності
          </Link>
          <p className="max-md:-order-1">@ 2023 All right reserved</p>
          <Link className="link-hover" to="#">
            Користувацька згода
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
