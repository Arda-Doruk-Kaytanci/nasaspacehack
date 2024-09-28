import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';
import Homepage from './Homepage';
import AllCatalogue from './AllCatalogue';
import ErrorPage from './ErrorPage';
import LoadingDataPage from './LoadingDataPage';
import Contributers from './Contributers';

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
                    <Link to="/quiz" id='quiz-link' className='nav-link' style={{ color: isActive('/quiz') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/quiz') ? 'bold' : 'normal', }}>
                        Quiz
                    </Link>
                    <Link to="/Info" id='quiz-link' className='nav-link' style={{ color: isActive('/Info') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/Info') ? 'bold' : 'normal', }}>
                        Info
                    </Link>
                    <Link to="/contributers" id='quiz-link' className='nav-link' style={{ color: isActive('/contributers') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/contributers') ? 'bold' : 'normal', }}>
                        Contributers
                    </Link>

                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/catalogue' element={<AllCatalogue />} />
                <Route path='/quiz' element={<ErrorPage />} />
                <Route path='/info' element={<AllCatalogue />} />
                <Route path='/contributers' element={<Contributers />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='/loading' element={<LoadingDataPage />} />
            </Routes>
        </>
    );
}

export default NavBar;
