import React from "react";
import HeaderSite from '../components/HeaderSite';
import MainSite from '../components/MainSite';
import FooterSite from '../components/FooterSite';

const Main = () => {
    return (
        <div className="mainclass">
            <HeaderSite />
            <MainSite />
            <FooterSite />
        </div>
    );
}

export default Main;