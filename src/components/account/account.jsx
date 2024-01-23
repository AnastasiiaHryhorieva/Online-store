import { NavLink, Outlet } from "react-router-dom";

import { cn } from "@/helpers/helpers";
import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";

const Account = () => {
  return (
    <section className="pb-16 pt-4">
      <div className="container">
        {/* TODO: */}
        <Breadcrumbs
          links={[
            {
              title: "Головна сторінка",
              href: "/",
            },
            {
              title: "Особистий кабінет",
              href: "/account",
            },
            {
              title: "Особисті дані",
              href: "/account",
            },
          ]}
        />

        <div className="mt-8 grid gap-x-20 md:grid-cols-[180px_1fr]">
          <aside className="mt-5">
            <nav>
              <ul className="space-y-4">
                {[
                  {
                    title: "Особисті дані",
                    href: "/account",
                  },
                  {
                    title: "Мої замовлення",
                    href: "/account/orders",
                  },
                  {
                    title: "Улюблені товари",
                    href: "/account/favorites",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          "link-hover pb-0.5 text-base_l",
                          isActive && "font-bold before:left-0 before:w-full",
                        )
                      }
                      to={item.href}
                      end
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <NavLink className="link-hover mt-[50px] inline-block" to="/">
                Вийти з кабінету
              </NavLink>
            </nav>
          </aside>

          <Outlet />
        </div>
      </div>
    </section>
  );
};

export { Account };
