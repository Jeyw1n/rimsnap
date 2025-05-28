import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductPage from "./components/ProductFull";

const Product = () => {
  return (
    <>
      <Header currentPage={"catalog"} />
      <ProductPage />
      <Footer />
    </>
  );
}

export default Product;