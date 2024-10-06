// src/components/Star.js
import React from 'react';
import './Info.css';
import trappist1Image from '../images/trappist1.jpg';

const Star = () => {
    return (
        <div className="info-container">
            <h1>Host Star: TRAPPIST-1</h1>
            <img src={trappist1Image} alt="TRAPPIST-1" className="info-image" />
            <h2>Star Characteristics</h2>
            <ul>
                <li><strong>Star Type:</strong> Ultra-cool red dwarf (M8V).</li>
                <li><strong>Mass:</strong> Approximately 0.089 times the mass of the Sun.</li>
                <li><strong>Radius:</strong> About 0.12 times that of the Sun.</li>
                <li><strong>Temperature:</strong> Approximately 2,511 K, significantly cooler than our Sun.</li>
                <li><strong>Luminosity:</strong> Roughly 0.00052 times that of the Sun.</li>
                <li><strong>Age:</strong> Estimated to be between 5.4 and 9.8 billion years...</li>
                <li><strong>Metallicity:</strong> Near solar metallicity with [Fe/H] ≈ 0.04...</li>
                <li><strong>Magnetic Field:</strong> TRAPPIST-1 has a strong magnetic field typical of red dwarfs...</li>
            </ul>
        </div>
    );
};

export default Star;
