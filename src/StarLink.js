import React from "react";
import { Link } from "react-router-dom";

function StarLink(props) {
    return (
        <Link to={`/stars/${props.name.toLowerCase().replace(/ /g, "-")}`} >
            <div className="link-widget">
                <img src={props.image}  className="link-image" />
                <h3 className="link-name">{props.name}</h3>
            </div>
        </Link>
    );
}

export default StarLink;