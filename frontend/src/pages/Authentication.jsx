import Auth from "../components/Auth/Auth";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Authentication = () => {
    return(
        <>
            <Header /> {/* Заголовок */}
            <Auth /> {/* Компонент аутентификации */}
            <Footer /> {/* Футер */}
        </>
    );
}

export default Authentication;