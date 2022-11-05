import React from 'react';
import map from '../Photos/map1.jpg';

export default function Navbar() {
    return (
        <div className="container-fluid">
            <h1>RastiQuest</h1>
            <img src={map} alt="map"/>

        </div>
        );
}