import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "@/components/common/header/header";
import { Footer } from "@/components/common/footer/footer";

const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-[min-content_1fr_min-content]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ["/catalog"];

          return paths.includes(location.pathname)
            ? // catalog restore by pathname
              // does not scroll up when selecting filters
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
    </div>
  );
};

export { Layout };
