import React, { useState } from "react";
import RenderMap from '../RenderMap';
import MapTemplates from "../MapTemplates";
import MapTable from "../MapTable";

// Компонент основного блока сайта
const MainSite = () => {
    // Отрисовка главного контента сайта
    return (
        <main id='ms'>
            <div className="mainmap">
                <RenderMap />
                <MapTemplates />
            </div>
            <div className="tableoffields">
                <MapTable />
            </div>
        </main>
    );
}

export default MainSite;


