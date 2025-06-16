import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CartList from "./CartList";


const CartPage = () => {
  return (
    <>
      <Header currentPage={"cart"} />
      <CartList />
      <Footer />
    </>
  );
}

export default CartPage;