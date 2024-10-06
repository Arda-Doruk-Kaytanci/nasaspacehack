import React from 'react';
import ItemLink from "./ItemLink"
import "./CssFiles/Star.css"
const Star = (props) => {
    return (
        <div className="info-container2">
            <h1>Name: {props.item.star.name}</h1>
            <img src={props.item.star.image} alt={props.item.star.name} className="info-image" />
            <div className="characteristics">
                <h2>Characteristics</h2>
                <summary><strong>Type:</strong> <details>{props.item.star.type}</details></summary>
                <summary><strong>Mass:</strong> <details>{props.item.star.mass}</details></summary>
                <summary><strong>Radius:</strong> <details>{props.item.star.radius}</details></summary>
                <summary><strong>Temperature:</strong> <details>{props.item.star.temp}</details></summary>
                <summary><strong>Luminosity:</strong> <details>{props.item.star.lumi}</details></summary>
                <summary><strong>Age:</strong> <details>{props.item.star.age}</details></summary>
                <summary><strong>Metallicity:</strong> <details>{props.item.star.metal}</details></summary>
                <summary><strong>Magnetic Field:</strong> <details>{props.item.star.magnetic}</details></summary>
            </div>
            <div className='linkscontainerpage'>
                <ItemLink category="planets" name={props.item.name} image={props.item.image}></ItemLink>
                <ItemLink category="systems" name={props.item.star.starsystem.name} image={props.item.star.starsystem.image}></ItemLink>
            </div>


        </div>
    );
};

export default Star;