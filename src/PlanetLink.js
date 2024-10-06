import React from "react";
import { Link } from "react-router-dom";

function PlanetLink(props) {
    return (
        <Link to={`/planets/${props.name.toLowerCase().replace(/ /g, "-")}`} >
            <div className="link-widget">
                <img src={props.image} alt={props.name} className="link-image" />
                <h3 className="link-name">{props.name}</h3>
            </div>
        </Link>
    );
}

export default PlanetLink;