import React from "react";
import { Link } from "react-router-dom";

function ItemLink(props) {
    return (
        <Link to={`/${props.category}/${props.name.replace(/I/g, "i").toLowerCase().replace(/ /g, "-")}`}>
            <div className="link-widget">
                <img src={props.image} alt={props.name} className="link-image" />
                <h3 className="link-name">{props.name}</h3>
            </div>
        </Link>
    );
}

export default ItemLink;
