import React from "react";
import './CssFiles/ErrorPage.css'
import error from "./Images/error.png"
function ErrorPage(props) {
    return (
        <div className="error-page-container">
            Error: {props.error}
            <br/>
            <img alt="error" src={error}></img>
        </div>
    )
}
export default ErrorPage