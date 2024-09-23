import React from "react";
import './CssFiles/ErrorPage.css'
function ErrorPage(props) {
    return (
        <div className="loading-data-page-container">
            Error {props.error}
        </div>
    )
}
export default ErrorPage