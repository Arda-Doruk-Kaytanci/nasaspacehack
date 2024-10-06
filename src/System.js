import React from 'react';
import './Info.css';
import trappist1SystemImage from '../images/trappist1_system.jpg';

const StarSystem = () => {
    return (
        <div className="info-container">
            <h1>Star System: TRAPPIST-1 System</h1>
            <img src={trappist1SystemImage} alt="TRAPPIST-1 System" className="info-image" />
            <h2>System Characteristics</h2>
            <ul>
                <li><strong>Planetary Composition:</strong> The system contains seven known Earth-sized planets (TRAPPIST-1b to TRAPPIST-1h).</li>
                <li><strong>Orbital Resonance:</strong> The planets are in a complex orbital resonance pattern...</li>
                <li><strong>Gravitational Influence:</strong> TRAPPIST-1’s low mass allows its planets to orbit closely...</li>
                <li><strong>Habitability Impact:</strong> TRAPPIST-1e's location in the star’s habitable zone means it could theoretically support liquid water...</li>
            </ul>
        </div>
    );
};

export default StarSystem;
