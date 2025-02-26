import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductPage from "../components/Shop/ProductPage";

const ProfilePage = () => {
    return (
        <>
            <Header currentPage={"catalog"} />
            <ProductPage />
            <Footer />
        </>

    );
}

export default ProfilePage;