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
            <Header currentPage={"home"} /> {/* Заголовок с текущей страницей */}
            <Title /> {/* Заголовок */}
            <MenuBlocks /> {/* Блоки меню */}
            <LastProducts count={4} /> {/* Последние продукты */}
            <Content /> {/* Основной контент */}
            <Footer /> {/* Футер */}
        </>
    );
}

export default Home;