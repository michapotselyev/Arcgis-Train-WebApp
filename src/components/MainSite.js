import React, { useState } from "react";
import RenderMap from './RenderMap';
import MapsConfig from "./MapsConfig";

const MainSite = () => {
    const [name, setName] =  useState('');
    const handleNameChange = (name) => {
        setName(name);
    }
    return (
        <main id='ms'>
            <div className="mapdiv" id="mdiv">
                <RenderMap name={name} />
                <MapsConfig onChange={handleNameChange} />
            </div>
            <aside className="infomap" id="infa">
                
            </aside>
        </main>
    );
}

export default MainSite;