import React from "react";

import Header from "../components/Header/Header";
import Title from "../components/Main/Title";
import MenuBlocks from "../components/Main/MenuBlocks";
import Content from "../components/Main/Content";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header currentPage={"home"} />
            <Title />
            <MenuBlocks />
            <Content />
            <Footer />
        </>

    );
}

export default Home;