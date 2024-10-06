import React from "react";
import "./CssFiles/Contributers.css"
import ContributerPage from "./ContributerPage";
import x from "./Images/arda.png"
import alper from "./Images/alper.png"
import furkan from "./Images/furkan.png"
import haci from "./Images/hacı.png"
import arda from "./Images/ardayazgan.png"
function Contributers() {
    return (
        <div className="contributers-page-container">
            <ContributerPage image={x} name="Arda Doruk Kaytanci" school="Science High School Of Ankara" job1="Full-Stack Developer" job2="Team Leader" />
            <ContributerPage image={alper} name="Alper Bulent Evren" school="Science High School Of Ankara" job1="Researcher" job2="Head of Research Team" />
            <ContributerPage image={furkan} name="Furkan Karataş" school="Science High School Of Ankara" job1="Researcher" />
            <ContributerPage image={haci} name="Haci Hasan Ocak" school="Science High School Of Ankara" job1="Researcher" />
            <ContributerPage iamge={arda}name="Arda Yazgan" school="Science High School Of Ankara" job1="Researcher" />
        </div>
    )
}
export default Contributers