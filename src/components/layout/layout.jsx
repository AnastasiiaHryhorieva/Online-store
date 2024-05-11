import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "@/components/common/header/header";
import { Footer } from "@/components/common/footer/footer";

const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-[min-content_1fr_min-content]">
      <div>
        <div className="h-[30px] bg-black text-center text-white max-lg:hidden">
          при замовлені від 1 600 ₴ - безкоштовна доставка кур’єром
        </div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export { Layout };
