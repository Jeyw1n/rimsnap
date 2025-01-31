import React from "react";

import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
    return (
        <>
            <Header currentPage={"profile"} />
            <Profile />
        </>

    );
}

export default ProfilePage;