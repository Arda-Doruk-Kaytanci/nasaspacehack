import React from 'react';
import './CssFiles/Planet.css'
import ItemLink from "./ItemLink"

const Exoplanet = (props) => {
    return (
        <div className="info-container2">
            <h1>Name: {props.item.name}</h1>
            <img src={props.item.image} alt={props.item.name} className="info-image" />
            <h2>Discovery Method</h2>
            <p className="discovery-method">
                {props.item.transit}
            </p>
            <div className="characteristics">
                <h2>Characteristics</h2>
                <summary><strong>Classification:</strong> <details>{props.item.classification}</details></summary>
                <summary><strong>Mass:</strong> <details>{props.item.mass}</details></summary>
                <summary><strong>Radius:</strong> <details>{props.item.radius}</details></summary>
                <summary><strong>Orbit:</strong> <details>{props.item.orbit}</details></summary>
                <summary><strong>Surface Gravity:</strong> <details>{props.item.gravity}</details></summary>
                <summary><strong>Atmosphere:</strong> <details>{props.item.atmos}</details></summary>
                <summary><strong>Surface Conditions:</strong> <details>{props.item.surface}</details></summary>
                <summary><strong>Magnetic Field:</strong> <details>{props.item.magnetic}</details></summary>
            </div>
            <div className='linkscontainerpage'>
                <ItemLink category="stars" name={props.item.star.name} image={props.item.star.image}></ItemLink>
                <ItemLink category="systems" name={props.item.star.starsystem.name} image={props.item.star.starsystem.image}></ItemLink>

            </div>

        </div>
    );
};

export default Exoplanet;
