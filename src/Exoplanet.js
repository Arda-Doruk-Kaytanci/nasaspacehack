import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';
import ItemLink from "./ItemLink"

const Exoplanet = (props) => {
    return (
        <div className="info-container">
            <h1>Exoplanet: {props.name}</h1>
            <img src={trappist1eImage} alt="TRAPPIST-1e" className="info-image" />
            <h2>Discovery Method</h2>
            <p>
                <strong>Transit Method:</strong> {props.transit}
            </p>
            <h2>Exoplanet Characteristics</h2>
            <summary><strong>Classification:</strong> <details><details></details>{props.class}</details></summary>
            <summary><strong>Mass:</strong> <details>{props.mass}</details></summary>
            <summary><strong>Radius:</strong> <details>{props.radius}</details></summary>
            <summary><strong>Orbit:</strong> <details>{props.orbit}</details></summary>
            <summary><strong>Surface Gravity:</strong> <details>{props.gravity}</details></summary>
            <summary><strong>Atmosphere:</strong> <details>{props.atmos}</details></summary>
            <summary><strong>Surface Conditions:</strong> <details>{props.surface}</details></summary>
            <summary><strong>Magnetic Field:</strong> <details>{props.magnetic}</details></summary>
            <ItemLink></ItemLink>

        </div>
    );
};

export default Exoplanet;
