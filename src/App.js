
import './CssFiles/App.css';
import React, { useRef } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

function App() {
  const navRef = useRef(null);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
