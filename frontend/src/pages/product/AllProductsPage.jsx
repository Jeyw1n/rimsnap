import React from "react";

import Header from "../../components/header/Header";
import AllProducts from "./components/AllProducts";
import Footer from "../../components/footer/Footer";

const Catalog = () => {
  return (
    <>
      <Header currentPage={"catalog"} />
      <AllProducts />
      <Footer />
    </>
  );
}

export default Catalog;