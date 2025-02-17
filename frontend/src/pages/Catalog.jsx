import React from "react";

import Header from "../components/Header/Header";
import Products from "../components/Shop/Products";
import Footer from "../components/Footer/Footer";

const Catalog = () => {
    return (
        <>
            <Header currentPage={"catalog"} />
            <Products />
            <Footer />
        </>

    );
}

export default Catalog;