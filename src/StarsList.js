import React, { useEffect, useState } from 'react';

const FetchStars = () => {
    const [stars, setStars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/stars/", {
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
            setStars(data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 5000000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Stars List</h1>
            <ul>
                {stars.length > 0 ? (
                    stars.map(star => (
                        <li key={star.id}>
                            {star.name}
                        </li>
                    ))
                ) : (
                    <p>No stars found</p>
                )}
            </ul>
        </div>
    );
};

export default FetchStars;
