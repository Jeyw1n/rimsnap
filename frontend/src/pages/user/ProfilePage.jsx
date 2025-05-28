import React from "react";

import Header from "../../components/header/Header";
import UserProfile from "./UserProfile";
import Footer from "../../components/footer/Footer";

const ProfilePage = () => {
  return (
    <>
      <Header currentPage={"profile"} />
      <UserProfile />
      <Footer />
    </>
  );
}

export default ProfilePage;