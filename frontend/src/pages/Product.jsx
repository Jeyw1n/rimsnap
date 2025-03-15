import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductPage from "../components/Shop/ProductPage";

const Product = () => {
  return (
    <>
      <Header currentPage={"catalog"} /> {/* Заголовок с текущей страницей */}
      <ProductPage /> {/* Компонент страницы продукта */}
      <Footer /> {/* Футер */}
    </>
  );
}

export default Product;