import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';
import Homepage from './Homepage';
import AllCatalogue from './AllCatalogue';

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
                    <Link to="/" className='link-nav' style={{ color: isActive('/') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/') ? 'bold' : 'normal',  }}>
                        Homepage
                    </Link>
                    <Link to="/catalogue" className='link-nav' style={{ color: isActive('/catalogue') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/catalogue') ? 'bold' : 'normal',  }}>
                        Catalogue
                    </Link>
                    <Link to="/tests" id='testLink' className='link-nav' style={{ color: isActive('/tests') ? 'rgb(29, 135, 241)' : 'white', fontWeight: isActive('/tests') ? 'bold' : 'normal', }}>
                        Tests
                    </Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/catalogue' element={<AllCatalogue />} />
            </Routes>
        </>
    );
}

export default NavBar;
