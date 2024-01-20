import { Outlet } from "react-router-dom";

import { Header } from "src/components/common/header/header";
import { Footer } from "src/components/common/footer/footer";

const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-[min-content_1fr_min-content]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };