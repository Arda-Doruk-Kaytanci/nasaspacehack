import React from "react";
import './CssFiles/LoadingDataPage.css';

function LoadingDataPage() {
    return (
        <div className="loading-data-page-container">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
}

export default LoadingDataPage;
