import React, { useState, useEffect } from "react";
import './CssFiles/Homepage.css'
import LoadingDataPage from "./LoadingDataPage";
import ErrorPage from "./ErrorPage"
function Homepage() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const fetchData = async (page = 1, query = '') => {
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
            <article className="homepage-article planet">
                <p>

                </p>
                <img className="homepage-article-image" />
            </article>
            <article className="homepage-article star">
                <p>
                    {data.length > 0 ? (
                        data.map(star => (
                            <li key={star.id}>
                                {star.planet.name}
                            </li>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </p>
                <img className="homepage-article-image" />
            </article>
            <article className="homepage-article system">
                <p>

                </p>
                <img className="homepage-article-image" />
            </article>
        </div>
    )
}
export default Homepage