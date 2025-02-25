import React from "react";

import Header from "../components/Header/Header";
import Title from "../components/Main/Title";
import MenuBlocks from "../components/Main/MenuBlocks";
import Content from "../components/Main/Content";
import Footer from "../components/Footer/Footer";
import LastProducts from "../components/Shop/LastProducts";

const Home = () => {
    return (
        <>
            <Header currentPage={"home"} />
            <Title />
            <MenuBlocks />
            <LastProducts count={4} />
            <Content />
            <Footer />
        </>

    );
}

export default Home;