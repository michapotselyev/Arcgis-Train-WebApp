import React, { useState } from "react";
import RenderMap from './RenderMap';
import MapsConfig from "./MapsConfig";

const MainSite = () => {
    const [name, setName] =  useState('');
    const handleNameChange = (name) => {
        setName(name);
    }
    return (
        <main>
            <RenderMap name={name} />
            <MapsConfig onChange={handleNameChange} />
        </main>
    );
}

export default MainSite;