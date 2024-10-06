import React, { useState, useEffect } from "react";
import './CssFiles/Homepage.css'
import LoadingDataPage from "./LoadingDataPage";
import ErrorPage from "./ErrorPage"
import kepler from "./Images/kepler.png"
import cheops from "./Images/cheops.png"
import webb from "./Images/james-webb.png"

function Homepage() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/selected-item`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data.results)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (loading) {
        return <LoadingDataPage></LoadingDataPage>
    }

    if (error) {
        return <ErrorPage err={error}></ErrorPage>
    }
    return (
        <div className="homepage-container">
            <article className="position-of-the-earth">
                <h1 className="first-header">Position Of The Earth In The Universe</h1>
                <h2>Have You Ever Wondered Where Are We</h2>
                <h2>Let's find out</h2>
                <ol className="position-of-the-earth-list">
                    <li>Earth is the third planet from the Sun in our Solar System.</li>
                    <br />
                    <li>The Solar System consists of the Sun (a star) and the celestial bodies that orbit it, including planets, moons, asteroids, and comets.</li>
                    <br />
                    <li> Our Solar System is part of the Milky Way Galaxy, a barred spiral galaxy that contains billions of stars. The Solar System is located in the Orion Arm (or Orion Spur), a minor spiral arm of the Milky Way</li>
                    <br />
                    <li>The Milky Way Galaxy is part of a collection of galaxies known as the Local Group. This group contains more than 50 galaxies, including the Andromeda Galaxy and the Triangulum Galaxy.</li>
                    <br />
                    <li>The Local Group is located within the Laniakea Supercluster, a vast collection of galaxy clusters spread across hundreds of millions of light-years</li>
                    <br />
                    <li>The Laniakea Supercluster is just one of many superclusters in the observable universe. The observable universe contains all the galaxies, stars, and other matter that we can potentially observe from Earth, spanning about 93 billion light-years in diameter.</li>
                </ol>
            </article>
            <section className="homepage-missions-section">
                <article className="homepage-article-missions">
                    <h1 className="mission-header">James Webb Space Telescope (JWST)</h1>
                    <img src={webb} alt="kepler space telescope" className="mission-image"></img>
                    <br />
                    <details className="homepage-article-details">
                        The JWST is designed to be the premier observatory of the next decade, focusing on infrared astronomy. One of its key objectives is to study the atmospheres of exoplanets, searching for signs of habitability and even possible biosignatures like water, methane, and oxygen.
                        <summary className="mission-summary">
                            Objective
                        </summary>
                    </details>
                    <details className="homepage-article-details">
                        By observing exoplanets in the infrared spectrum, JWST can detect the chemical composition of exoplanet atmospheres. It aims to gather detailed information about the temperature, weather patterns, and atmospheric conditions, contributing significantly to our understanding of planet formation and the potential for life beyond our solar system.
                        <summary className="mission-summary">
                            Contributions
                        </summary>
                    </details>
                </article>
                <article className="homepage-article-missions">
                    <h1 className="mission-header">Kepler Space Telescope</h1>
                    <img src={kepler} alt="kepler space telescope" className="mission-image"></img>
                    <br />
                    <details className="homepage-article-details">
                        Launched in 2009, Kepler's primary mission was to explore the structure and diversity of planetary systems, focusing on finding Earth-sized planets in the habitable zones of their stars where liquid water could exist.
                        <summary className="mission-summary">
                            Objective
                        </summary>
                    </details>
                    <details className="homepage-article-details">
                        Kepler used the transit method to detect exoplanets, monitoring over 150,000 stars and identifying thousands of exoplanet candidates. It revolutionized our understanding of exoplanets, revealing that there are likely billions of Earth-like planets in our galaxy. Many of the exoplanets discovered by Kepler remain key targets for further study by other telescopes, such as TESS and the James Webb Space Telescope.
                        <summary className="mission-summary">
                            Contributions
                        </summary>
                    </details>
                </article>
                <article className="homepage-article-missions">
                    <h1 className="mission-header">CHEOPS (Characterising ExoPlanet Satellite)</h1>
                    <img src={cheops} alt="kepler space telescope" className="mission-image"></img>
                    <br />
                    <details className="homepage-article-details">
                        CHEOPS is designed to study known exoplanets around bright stars. Its primary mission is to measure the sizes of exoplanets and determine their densities, helping scientists understand their compositions.
                        <summary className="mission-summary">
                            Objective
                        </summary>
                    </details>
                    <details className="homepage-article-details">
                        By measuring the size of an exoplanet precisely, CHEOPS provides vital clues about the planet's internal structure, whether it is rocky like Earth, gaseous like Neptune, or something in between. This information is crucial in assessing an exoplanet's potential habitability.
                        <summary className="mission-summary">
                            Contributions
                        </summary>
                    </details>
                </article>
            </section>

            <div className="homepage-showcase-container">
                <section className="homepage-section liveable">
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                </section>
                <section className="homepage-section multiple-star">
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                </section>
                <section className="homepage-section lava">
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                    <div className="homepage-section-div">
                        <img src={kepler} className="homepage-section-div-image"></img>
                        <p className="homepage-div-p">{data[0].planet.summary}</p>
                    </div>
                </section>
            </div>

            <section className="cotton-candy">
                <div className="homepage-section-div cotton-candy">
                    <img src={kepler} className="homepage-section-div-image"></img>
                    <p className="homepage-div-p">{data[0].planet.summary}</p>
                </div>
            </section>

            <article className="homepage-article planet">
                <img className="homepage-article-image planet" src={data[0].planet.image} alt="selected planet" />
                <p className="homepage-article-p left">
                    {data[0].planet.summary}
                </p>
            </article>
            <article className="homepage-article star">
                <img className="homepage-article-image star" src={data[0].planet.star.image} alt="selected planets star" />
                <p className="homepage-article-p right">
                    {data[0].planet.star.summary}
                </p>
            </article>
            <article className="homepage-article system">
                <img className="homepage-article-image system" src={data[0].planet.star.starsystem.image} alt="selected planets system" />
                <p className="homepage-article-p left">
                    {data[0].planet.star.starsystem.summary}
                </p>
            </article>
        </div>
    )
}
export default Homepage