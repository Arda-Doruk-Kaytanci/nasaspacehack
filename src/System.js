import React from 'react';
import './CssFiles/System.css';
import ItemLink from './ItemLink';

const System = (props) => {
    return (
        <div className="info-container2">
            <h1>Name: {props.item.star?.starsystem?.name || 'Unknown System'}</h1>
            <img
                src={props.item.star?.starsystem?.image || 'default-image.jpg'}
                alt={props.item.star?.starsystem?.name || 'Unknown'}
                className="info-image"
            />
            <h2>Characteristics</h2>
            <summary>
                <strong>Planetary:</strong>
                <details>{props.item.star?.starsystem?.planetary || 'N/A'}</details>
            </summary>
            <summary>
                <strong>Orbit:</strong>
                <details>{props.item.star?.starsystem?.orbit || 'N/A'}</details>
            </summary>
            <summary>
                <strong>Gravity:</strong>
                <details>{props.item.star?.starsystem?.gravity || 'N/A'}</details>
            </summary>
            <summary>
                <strong>Habitability:</strong>
                <details>{props.item.star?.starsystem?.habitability || 'N/A'}</details>
            </summary>
            <div className='linkscontainerpage'>
                <ItemLink
                    category="stars"
                    name={props.item.star?.name || 'Unknown Star'}
                    image={props.item.star?.image || 'default-image.jpg'}
                />
                <ItemLink
                    category="planets"
                    name={props.item.name || 'Unknown Planet'}
                    image={props.item.image || 'default-image.jpg'}
                />
            </div>

        </div>
    );
};

export default System;
