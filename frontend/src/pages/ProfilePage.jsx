import React from "react";

import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";

const ProfilePage = () => {
    return (
        <>
            <Header currentPage={"profile"} /> {/* Заголовок с текущей страницей */}
            <Profile /> {/* Компонент профиля */}
            <Footer /> {/* Футер */}
        </>
    );
}

export default ProfilePage;