import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./Images/nasaspacehacklogo.jpg"
import './CssFiles/Footer.css'
function Footer({ scrollRef }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const LinkButton = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const onClickHandler = () => {
            navigate(props.link);
            if (props.scrollRef?.current) {
                props.scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        const isActive = location.pathname === `/${props.link}` || (location.pathname === '/' && props.link === "");

        return (
            <>
                <button
                    onClick={onClickHandler}
                    style={{
                        color: isActive ? 'grey' : 'aliceblue',
                        fontWeight: isActive ? 700 : 'bold',
                        borderColor: isActive ? 'grey' : 'aliceblue'
                    }}
                    className='link'
                >
                    {props.name}
                </button>
            </>
        );
    }
    const goUp = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (screenWidth <= 500) {
        return (
            <>
                <div className="footer-container">
                    <img src={logo} alt="logo of the website" className="logo"></img>
                    <div className="footer-grid-container">
                        <ul id="footer-link">
                            Navigations
                            <li><LinkButton name="Homepage" link="" scrollRef={scrollRef}></LinkButton></li>
                            <li><LinkButton name="Tips" link="tips" scrollRef={scrollRef}></LinkButton></li>
                            <li><LinkButton name="Tests" link="tests" scrollRef={scrollRef} ></LinkButton></li>
                            <li><button type="button" onClick={goUp} id="goUp" className="link" >Go Up</button></li>
                        </ul>
                        <ol className="contributers">Contributers
                            <li>
                                Arda Doruk Kaytancı
                            </li>
                            <li>
                                Alper Bülent Evren
                            </li>
                            <li>
                                Arda Yazgan
                            </li>
                            <li>
                                Hacı Hasan Ocak
                            </li>
                            <li>
                                Furkan Kürtoğlu
                            </li>
                        </ol>
                    </div>
                    <div id="contacts">
                        Contacts
                        <p>
                            Email: ardadorukkaytanci@gmail.com<br />
                        </p>
                        <footer className='Footer'>@Copyright</footer>
                    </div>
                </div >
            </>
        )
    }
    return (
        <>
            <div className="footer-container">
                <div className="footer-grid-container">
                    <ul id="footer-link">
                        Navigations
                        <li><LinkButton name="Homepage" link="" scrollRef={scrollRef}></LinkButton></li>
                        <li><LinkButton name="Tips" link="tips" scrollRef={scrollRef}></LinkButton></li>
                        <li><LinkButton name="Tests" link="tests" scrollRef={scrollRef} ></LinkButton></li>
                        <li><button type="button" onClick={goUp} id="goUp" className="link" >Go Up</button></li>
                    </ul>
                </div>
                <div id="contacts" className="footer-grid-container">
                    <br />
                    <br />
                    <img src={logo} alt="logo of the website" className="logo"></img>
                    <br />
                    <br />
                    Contacts
                    <p>
                        Email: ardadorukkaytanci@gmail.com<br />
                    </p>
                    <footer className='Footer'>@Copyright</footer>
                </div>
                <div className="footer-grid-container">
                    <ol className="contributers">Contributers
                        <li>
                            Arda Doruk Kaytancı
                        </li>
                        <li>
                            Alper Bülent Evren
                        </li>
                        <li>
                            Arda Yazgan
                        </li>
                        <li>
                            Hacı Hasan Ocak
                        </li>
                        <li>
                            Furkan Kürtoğlu
                        </li>
                    </ol>
                </div>
            </div >
        </>
    )
}

export default Footer;
