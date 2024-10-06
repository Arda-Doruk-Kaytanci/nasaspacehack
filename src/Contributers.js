import React from "react";
import "./CssFiles/Contributers.css"
import ContributerPage from "./ContributerPage";
import x from "./Images/backgroundDesktop.png"
function Contributers() {
    return (
        <div className="contributers-page-container">
            <ContributerPage image={x} name="Arda Doruk Kaytanci" school="Science High School Of Ankara" job1="Full-Stack Developer" job2="Team Leader" />
            <ContributerPage name="Alper Bulent Evren" school="Science High School Of Ankara" job1="Researcher" job2="Head of Research Team" />
            <ContributerPage name="Furkan Karataş" school="Science High School Of Ankara" job1="Researcher" />
            <ContributerPage name="Haci Hasan Ocak" school="Science High School Of Ankara" job1="Researcher" />
            <ContributerPage name="Arda Yazgan" school="Science High School Of Ankara" job1="Researcher" />
        </div>
    )
}
export default Contributers