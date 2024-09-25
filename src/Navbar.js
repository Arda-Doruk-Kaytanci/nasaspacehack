import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';
import Homepage from './Homepage';

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
                    <Link to="/" className='link-nav' style={{ color: isActive('/') ? 'black' : 'grey', fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                        Homepage
                    </Link>
                    <Link to="/tips" className='link-nav' id='tipsLink' style={{ color: isActive('/tips') ? 'black' : 'grey', fontWeight: isActive('/tips') ? 'bold' : 'normal' }}>
                        Tips
                    </Link>
                    <Link to="/tests" id='testLink' className='link-nav' style={{ color: isActive('/tests') ? 'black' : 'grey', fontWeight: isActive('/tests') ? 'bold' : 'normal' }}>
                        Tests
                    </Link>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </>
    );
}

export default NavBar;
