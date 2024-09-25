import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';

const AllCatalogue = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ stars: [], planets: [], systems: [] })
    const [categories, setCategories] = useState(['stars', 'planets', 'systems'])
    const [selectedCategory, setSelectedCategory] = useState('')

    const fetchData = async () => {
        try {
            const [starsResponse, planetsResponse, systemsResponse] = await Promise.all([
                fetch('http://127.0.0.1:8000/api/stars'),
                fetch('http://127.0.0.1:8000/api/planets'),
                fetch('http://127.0.0.1:8000/api/systems')
            ]);

            if (!starsResponse.ok || !planetsResponse.ok || !systemsResponse.ok) {
                throw new Error('Failed to fetch one or more resources');
            }

            const [starsData, planetsData, systemsData] = await Promise.all([
                starsResponse.json(),
                planetsResponse.json(),
                systemsResponse.json()
            ]);

            setData({
                stars: starsData.results || [],
                planets: planetsData.results || [],
                systems: systemsData.results || [],
            });
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterData = (items) => {
        return items.filter(item =>
            item.category === selectedCategory && item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    if (loading) return <LoadingDataPage />
    if (error) return <ErrorPage error={error} />

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <h2>Stars</h2>
            <ul>
                {filterData(data.stars).map(star => (
                    <li key={star.id}>{star.name}</li>
                ))}
            </ul>

            <h2>Planets</h2>
            <ul>
                {filterData(data.planets).map(planet => (
                    <li key={planet.id}>{planet.name}</li>
                ))}
            </ul>

            <h2>Systems</h2>
            <ul>
                {filterData(data.systems).map(system => (
                    <li key={system.id}>{system.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllCatalogue;
