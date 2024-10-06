import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';
import './CssFiles/AllCatalogue.css';
import ItemLink from './ItemLink';
import PlanetLink from './PlanetLink';
import SystemLink from './SystemLink';

const AllCatalogue = () => {
    const [tempSearchTerm, setTempSearchTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ stars: [], planets: [], systems: [] });
    const [categories] = useState(['stars', 'planets', 'systems']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [compareItem, setCompareItem] = useState(null);
    const [compareItem2, setCompareItem2] = useState(null);

    useEffect(() => {
        const storedCompareItem = localStorage.getItem('compareItem');
        const storedCompareItem2 = localStorage.getItem('compareItem2');
        if (storedCompareItem) {
            setCompareItem(JSON.parse(storedCompareItem));
        }
        if (storedCompareItem2) {
            setCompareItem2(JSON.parse(storedCompareItem2));
        }
    }, []);

    useEffect(() => {
        if (compareItem) {
            localStorage.setItem('compareItem', JSON.stringify(compareItem));
        } else {
            localStorage.removeItem('compareItem');
        }

        if (compareItem2) {
            localStorage.setItem('compareItem2', JSON.stringify(compareItem2));
        } else {
            localStorage.removeItem('compareItem2');
        }
    }, [compareItem, compareItem2]);

    const fetchAllPagesData = async (category) => {
        try {
            setLoading(true);
            let allData = [];
            let page = 1;
            let hasNextPage = true;

            while (hasNextPage) {
                const response = await fetch(`http://127.0.0.1:8000/api/${category}/?page=${page}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${category} data`);
                }

                const responseData = await response.json();
                allData = [...allData, ...(responseData.results || [])];

                hasNextPage = !!responseData.next;
                page++;
            }

            setData(prevData => ({
                ...prevData,
                [category]: allData,
            }));

            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

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
            if (searchTerm) {
                fetchAllPagesData(selectedCategory);
            } else {
                fetchData(selectedCategory, currentPage);
            }
        }
    }, [selectedCategory, currentPage, searchTerm]);

    const getFilteredData = () => {
        if (!selectedCategory || !data[selectedCategory]) return [];

        const categoryData = data[selectedCategory];

        return categoryData.filter(item =>
            item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };


    const handleCompareClick = (item) => {
        if (!compareItem) {
            setCompareItem(item);
        } else if (!compareItem2) {
            setCompareItem2(item);
        } else {
            setCompareItem(item);
        }
    };

    const handleClearComparison = () => {
        setCompareItem(null);
        setCompareItem2(null);
        localStorage.removeItem('compareItem');
        localStorage.removeItem('compareItem2');
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

    return (
        <div className="all-catalogue">
            <div className='search-container'>
                <input
                    type="text"
                    value={tempSearchTerm}
                    onChange={(e) => setTempSearchTerm(e.target.value)}
                    onBlur={() => setSearchTerm(tempSearchTerm)}
                    placeholder="Search..."
                    disabled={!selectedCategory}
                    className='search-input'
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setCurrentPage(1);
                        setTempSearchTerm('');
                        setSearchTerm('');
                        setData({ stars: [], planets: [], systems: [] });
                        console.log(compareItem)
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

            <div className='split-view-container'>
                {(compareItem || compareItem2) && (
                    <div className='compare-view-left'>
                        {compareItem && (
                            <div className='compare-item'>
                                {selectedCategory === "stars" ? (
                                    <>
                                        <h2>{compareItem.name}</h2>
                                        <h3>{compareItem.star.name}</h3>
                                    </>
                                ) : selectedCategory === "systems" ? (
                                    <>
                                        <h2>{compareItem.star.starsystem.name}</h2>
                                        <h3>{compareItem.star.name}</h3>
                                        <h4>{compareItem.name}</h4>
                                    </>
                                ) : selectedCategory === "planets" ? (
                                    <>
                                        <h2>{compareItem.name}</h2>
                                        <h3>{compareItem.star.name}</h3>
                                        <h4>{compareItem.star.starsystem.name}</h4>
                                    </>
                                ) : null}
                            </div>
                        )}

                        <button onClick={handleClearComparison} className='clear-compare-button'>Close</button>
                    </div>
                )}

                <div className={`links-container ${compareItem ? 'half-width' : 'full-width'}`}>
                    {getFilteredData().map(item =>
                        selectedCategory === "stars" ? (
                            <div key={item.id} className='item-container'>
                                <ItemLink name={item.name} image={item.image} />
                                <button onClick={() => handleCompareClick(item)}>Compare</button>
                            </div>
                        ) : selectedCategory === "systems" ? (
                            <div key={item.id} className='system-container'>
                                <SystemLink name={item.star.starsystem.name} image={item.star.starsystem.image} />
                                <button onClick={() => handleCompareClick(item)}>Compare</button>
                            </div>
                        ) : selectedCategory === "planets" ? (
                            <div key={item.id} className='system-container'>
                                <PlanetLink name={item.name} image={item.image} />
                                <button onClick={() => handleCompareClick(item)}>Compare</button>
                            </div>
                        ) : null
                    )}
                </div>
                {(compareItem || compareItem2) && compareItem2 && (
                    <div className='compare-view-right'>
                        {compareItem2 && (
                            <div className='compare-item'>
                                {selectedCategory === "stars" ? (
                                    <>
                                        <h2>{compareItem2.name}</h2>
                                        <h3>{compareItem2.star.name}</h3>
                                    </>
                                ) : selectedCategory === "systems" ? (
                                    <>
                                        <h2>{compareItem2.star.starsystem.name}</h2>
                                        <h3>{compareItem2.star.name}</h3>
                                        <h4>{compareItem2.name}</h4>
                                    </>
                                ) : selectedCategory === "planets" ? (
                                    <>
                                        <h2>{compareItem2.name}</h2>
                                        <h3>{compareItem2.star.name}</h3>
                                        <h4>{compareItem2.star.starsystem.name}</h4>
                                    </>
                                ) : null}
                            </div>
                        )}
                        <button onClick={handleClearComparison} className='clear-compare-button'>Close</button>
                    </div>
                )}

            </div>
            {selectedCategory && !searchTerm && (
                <div className='paginator-buttons-container'>
                    <button onClick={goToPreviousPage} disabled={!previousPage} className='paginator-button'>
                        Previous
                    </button>
                    <span className=' -page-span'> Page {currentPage} </span>
                    <button onClick={goToNextPage} disabled={!nextPage} className='paginator-button'>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllCatalogue;