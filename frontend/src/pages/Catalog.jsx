import React from "react";

import Header from "../components/Header/Header";
import Products from "../components/Shop/Products";

const Catalog = () => {
    return (
        <>
            <Header currentPage={"catalog"} />
            <Products />
        </>

    );
}

export default Catalog;