import React, { useState, useEffect } from "react";
import './CssFiles/Homepage.css'
import LoadingDataPage from "./LoadingDataPage";
import ErrorPage from "./ErrorPage"
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
                Position
            </article>

            <article className="homepage-article-missions">
                Include First Succes first system they found first planet first star first blackhole
            </article>

            <article className="homepage-article-missions">

            </article>

            <article className="homepage-article-missions">

            </article>

            <section className="homepage-section liveable">
                <p>
                    {data[0].planet.summary}
                </p>
                <p>
                    {data[0].planet.summary}
                </p>
            </section>
            <section className="homepage-section multiple-star">
                <p>
                    {data[0].planet.summary}
                </p>
                <p>
                    {data[0].planet.summary}
                </p>
            </section>
            <section className="homepage-section lava">
                <p>
                    {data[0].planet.summary}
                </p>
                <p>
                    {data[0].planet.summary}
                </p>
            </section>
            <section className="homepage-section cotton-candy">
                <p>
                    {data[0].planet.summary}
                </p>
            </section>

            <article className="homepage-article planet">
                <img className="homepage-article-image planet" src={data[0].planet.image} alt="selected planet" />
                <p>
                    {data[0].planet.summary}
                </p>
            </article>
            <article className="homepage-article star">
                <img className="homepage-article-image star" src={data[0].planet.star.image} alt="selected planets star" />
                <p>
                    {data[0].planet.star.summary}
                </p>
            </article>
            <article className="homepage-article system">
                <img className="homepage-article-image system" src={data[0].planet.star.starsystem.image} alt="selected planets system" />
                <p>
                    {data[0].planet.star.starsystem.summary}
                </p>
            </article>
        </div>
    )
}
export default Homepage