import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

import Title from "./Title";
import MenuBlocks from "./MenuBlocks";
import Content from "./Content";

// import LastProducts from "../product/components/LastProducts";

const Home = () => {
  return (
    <>
      <Header currentPage={"home"} />
      <Title />
      <MenuBlocks />
      {/* <LastProducts count={4} /> */}
      <Content />
      <Footer />
    </>
  );
}

export default Home;