import React, { useEffect, useState } from 'react';

const FetchStars = () => {
    const [stars, setStars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async (page = 1, query = '') => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/stars/?page=${page}&search=${query}`, {
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
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData(currentPage, searchQuery);
    }, [currentPage, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchData(1, searchQuery);
    };

    const goToNextPage = () => {
        if (nextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (previousPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Stars List</h1>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stars by name"
                />
                <button type="submit">Search</button>
            </form>

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

            <div>
                <button onClick={goToPreviousPage} disabled={!previousPage}>
                    Previous
                </button>
                <span> Page {currentPage} </span>
                <button onClick={goToNextPage} disabled={!nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FetchStars;
