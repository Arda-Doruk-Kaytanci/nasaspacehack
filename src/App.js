
import './CssFiles/App.css';
import React, { useRef } from 'react';
import StarsList from './StarsList';
import NavBar from './Navbar';
import Footer from './Footer';


function App() {
  const navRef = useRef(null);
  return (
    <div className="App">
      <NavBar ref={navRef}></NavBar>
      <StarsList></StarsList>
      <Footer scrollRef={navRef}></Footer>
    </div>
  );
}

export default App;
