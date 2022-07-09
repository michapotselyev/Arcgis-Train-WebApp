import React from "react";

// Компонент шапки сайта
const HeaderSite = () => {
    // Отрисовка шапки сайта
    return (
        <header>
            <ul className="menu">
                <li><a href="/">Главная</a></li>
                <li><a href="/tasks">Задачи</a></li>
                <li><a href="/calendar">Календарь</a></li>
                <li><a href="/contacts">Контакты</a></li>
            </ul>
        </header>
    );
}

export default HeaderSite;