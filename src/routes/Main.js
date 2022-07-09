import React from "react";
import HeaderSite from "../components/site-parts/HeaderSite";
import MainSite from "../components/site-parts/MainSite";
import FooterSite from "../components/site-parts/FooterSite";

// Компонент главной страницы
const Main = () => {
    // Отрисовка главной страницы
    return (
        <div className="mainclass">
            <HeaderSite />
            <MainSite />
            <FooterSite />
        </div>
    );
}

export default Main;