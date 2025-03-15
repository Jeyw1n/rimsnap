import React from "react";

import Header from "../components/Header/Header";
import AllProducts from "../components/Shop/AllProducts";
import Footer from "../components/Footer/Footer";

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