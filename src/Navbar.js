import React, { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css';

const NavBar = forwardRef((props, ref) => {
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
                ref={ref}
            >
                <nav>
                    <Link to="" className='link-nav' style={{ color: isActive('/') ? 'black' : 'grey', fontWeight: isActive('/') ? 'bold' : 'normal' }}>
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
        </>
    );
});

export default NavBar;
