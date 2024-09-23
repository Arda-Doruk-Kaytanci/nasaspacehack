
import './CssFiles/App.css';
import React, { useRef } from 'react';
import Homepage from './Homepage';
import NavBar from './Navbar';
import Footer from './Footer';


function App() {
  const navRef = useRef(null);
  return (
    <div className="App">
      <NavBar ref={navRef}></NavBar>
      <Homepage></Homepage>
      <Footer scrollRef={navRef}></Footer>
    </div>
  );
}

export default App;
