import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';
import './CssFiles/AllCatalogue.css';
import StarLink from './StarLink';

const AllCatalogue = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ stars: [], planets: [], systems: [] });
    const [categories] = useState(['stars', 'planets', 'systems']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    const fetchData = async (category, page = 1) => {
        try {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/${category}/?page=${page}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch ${category} data`);
            }

            const responseData = await response.json();
            setData(prevData => ({
                ...prevData,
                [category]: responseData.results || [],
            }));

            setNextPage(responseData.next);
            setPreviousPage(responseData.previous);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedCategory) {
            fetchData(selectedCategory, currentPage);
        }
    }, [selectedCategory, currentPage]);

    const getFilteredData = () => {
        if (!selectedCategory) return [];
        const categoryData = data[selectedCategory];
        return categoryData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
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

    if (loading) return <LoadingDataPage />;
    if (error) return <ErrorPage error={error} />;

    const Items = () => {
        return (
            <>
                {getFilteredData().map(item => {
                    switch (selectedCategory) {
                        case 'stars':
                            return <StarLink key={item.id} name={item.name} />;
                        case 'planets':
                            return <StarLink key={item.id} name={item.name} />;
                        case 'systems':
                            return <StarLink key={item.id} name={item.name} />;
                        default:
                            return null;
                    }
                })}
            </>
        )
    }
    return (
        <div className='all-catalogue'>
            <div className='search-container'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    disabled={!selectedCategory}
                    className='search-input'
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setCurrentPage(1);
                    }}
                    className='sort-button'
                >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category[0].toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <h2 className='category-identifier'>{selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'Please select a category'}</h2>
            <div className='links-container'>
                {getFilteredData().map(item => {
                    switch (selectedCategory) {
                        case 'stars':
                            return <StarLink key={item.id} name={item.name} />;
                        case 'planets':
                            return <StarLink key={item.id} name={item.name} />;
                        case 'systems':
                            return <StarLink key={item.id} name={item.name} />;
                        default:
                            return null;
                    }
                })}
            </div>
            {selectedCategory && (
                <div className='paginator-buttons-container'>
                    <button onClick={goToPreviousPage} disabled={!previousPage} className='paginator-button'>
                        Previous
                    </button>
                    <span className='current-page-span'> Page {currentPage} </span>
                    <button onClick={goToNextPage} disabled={!nextPage} className='paginator-button'>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllCatalogue;
