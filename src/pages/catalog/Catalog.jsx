import React from "react";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import Main from "./main/Main";
import Aside from "./aside/Aside";
import Maillist from "../home/main/maillist/Maillist";

const Catalog = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center gap-16 mx-36">
        <Aside />
        <Main />
      </div>
      <Maillist />
      <Footer />
    </>
  );
};

export default Catalog;
