import React, { forwardRef } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './CssFiles/Navbar.css'

const NavBar = forwardRef((props, ref) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className='Nav' ref={ref}>
                <nav>
                    <Link to="" className='link-nav' style={{ color: isActive('/') ? 'black' : 'grey', fontWeight: isActive('/') ? 'bold' : 'normal' }}>Homepage</Link>
                    <Link to="/tips" className='link-nav' id='tipsLink' style={{ color: isActive('/tips') ? 'black' : 'grey', fontWeight: isActive('/tips') ? 'bold' : 'normal' }}>Tips</Link>
                    <Link to="/tests" id='testLink' className='link-nav' style={{ color: isActive('/crops') ? 'black' : 'grey', fontWeight: isActive('/crops') ? 'bold' : 'normal' }}>Tests</Link>
                </nav>
                <hr />
            </div>


            <Routes>
            </Routes>
        </>
    );
});

export default NavBar;
