import React from "react";
import HeaderSite from "../components/site-parts/HeaderSite";
import FooterSite from "../components/site-parts/FooterSite";

// Компонент страницы с календарем
const Calendar = () => {
    // Отрисовка страницы с календарем
    return (<div className="calendarclass"><HeaderSite /><FooterSite /></div>);
}

export default Calendar;