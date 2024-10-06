import React, { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';
import Homepage from './Homepage';
import AllCatalogue from './AllCatalogue';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';
import Contributers from './Contributers';
import Quiz from "./Quiz";
import Info from './Info';
import Exoplanet from "./Exoplanet";
import Star from "./Star";
import System from "./System";

function NavBar() {
    const location = useLocation();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            setLoading(true);
            let allResults = [];
            let url = 'http://127.0.0.1:8000/api/planets';

            while (url) {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data`);
                }

                const responseData = await response.json();
                allResults = allResults.concat(responseData.results);

                url = responseData.next;
            }

            setData(allResults);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const RouteElements = Array.isArray(data) ? data.map((item) => {
        return [
            <Route key={`${item.id}-planet`} path={`/planets/${item.url}`} element={<Exoplanet item={item} />} />,
            <Route key={`${item.id}-star`} path={`/stars/${item.star.url}`} element={<Star item={item} />} />,
            <Route key={`${item.id}-system`} path={`/systems/${item.star.starsystem.url}`} element={<System item={item} />} />
        ];
    }).flat() : [];




    const isActive = (path) => location.pathname === path;
    const [scrollDir, setScrollDir] = useState('up');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateYDir = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';

            if (direction !== scrollDir) {
                setScrollDir(direction);
            }

            setIsVisible(direction === 'up' || scrollY <= 50);

            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateYDir);
        return () => window.removeEventListener('scroll', updateYDir);
    }, [scrollDir]);

    if (loading) return <LoadingDataPage />;
    if (error) return <ErrorPage error={error} />;

    return (
        <>
            <div className={`Nav ${isVisible ? 'show' : 'hide'}`}>
                <nav>
                    <Link to="/" className='nav-link' style={{ color: isActive('/') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                        Homepage
                    </Link>
                    <Link to="/catalogue" className='nav-link' style={{ color: isActive('/catalogue') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/catalogue') ? 'bold' : 'normal' }}>
                        Catalogue
                    </Link>
                    <Link to="/create-your-planet" className='nav-link' style={{ color: isActive('/create-your-planet') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/create-your-planet') ? 'bold' : 'normal' }}>
                        Create Your Planet
                    </Link>
                    <Link to="/info" className='nav-link' style={{ color: isActive('/info') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/info') ? 'bold' : 'normal' }}>
                        Info
                    </Link>
                    <Link to="/contributers" className='nav-link' style={{ color: isActive('/contributers') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/contributers') ? 'bold' : 'normal' }}>
                        Contributers
                    </Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/catalogue' element={<AllCatalogue />} />
                <Route path='/create-your-planet' element={<Quiz />} />
                <Route path='/info' element={<Info />} />
                <Route path='/contributers' element={<Contributers />} />
                {RouteElements}
            </Routes>
        </>
    );
}

export default NavBar;
