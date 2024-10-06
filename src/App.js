
import './CssFiles/App.css';
import React, { useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import NavBar from './Navbar';
import Footer from './Footer';

function App() {
  const location = useLocation()
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });

  }, [location])
  const topRef = useRef(null);
  return (
    <div className="App" ref={topRef}>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
