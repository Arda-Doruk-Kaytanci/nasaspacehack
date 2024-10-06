import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';
import Homepage from './Homepage';
import AllCatalogue from './AllCatalogue';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';
import Contributers from './Contributers';
import Quiz from "./Quiz";
import Info from './Info';

function NavBar() {
    const location = useLocation();
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
    return (
        <>
            <div
                className={`Nav ${isVisible ? 'show' : 'hide'}`}
            >
                <nav>
                    <Link to="/" className='nav-link' style={{ color: isActive('/') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/') ? 'bold' : 'normal', }}>
                        Homepage
                    </Link>
                    <Link to="/catalogue" className='nav-link' style={{ color: isActive('/catalogue') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/catalogue') ? 'bold' : 'normal', }}>
                        Catalogue
                    </Link>
                    <Link to="/create-your-planet" className='nav-link' style={{ color: isActive('/create-your-planet') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/create-your-planet') ? 'bold' : 'normal', }}>
                        Create Your Planet
                    </Link>
                    <Link to="/Info" className='nav-link' style={{ color: isActive('/Info') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/Info') ? 'bold' : 'normal', }}>
                        Info
                    </Link>
                    <Link to="/contributers" className='nav-link' style={{ color: isActive('/contributers') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/contributers') ? 'bold' : 'normal', }}>
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
                <Route path='/error' element={<ErrorPage />} />
                <Route path='/loading' element={<LoadingDataPage />} />
            </Routes>
        </>
    );
}

export default NavBar;
