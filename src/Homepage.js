import React from 'react';
import { Link } from 'react-router-dom';
import perfectPlaceIcon from './perfect_place_icon.png';
import backgroundImage from './background.png';

const Homepage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '5%' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: 'white', textAlign: 'left', fontSize: '4vw', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '2px', marginBottom: '5%' }}>DataChefBrett</h1>
        {/* Placeholder feature */}
        <div style={{ backgroundColor: 'rgba(255, 99, 71, 0.8)', padding: '5%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginBottom: '5%', width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '3vw', marginBottom: '2%' }}>Placeholder Feature</h2>
          <p style={{ color: 'white', fontSize: '1.5vw' }}>This is a placeholder feature. You can replace it with your desired content.</p>
        </div>
        {/* End of Placeholder feature */}
        <div style={{ backgroundColor: 'rgba(255, 99, 71, 0.8)', padding: '2%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginBottom: '5%', width: '50%', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1%' }}>
            <img src={perfectPlaceIcon} alt="Perfect Place Icon" style={{ width: '3vw', marginRight: '1vw', borderRadius: '5px' }} />
            <p style={{ fontSize: '1.2vw', marginTop: '0px', marginBottom: '1%', color: 'white', cursor: 'default' }}>Explore Perfect Place powered by DataChefBrett:</p>
          </div>
          <Link to="/map" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontSize: '1.2vw',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                borderRadius: '5px',
                color: 'white',
                backgroundColor: 'transparent',
                border: '2px solid white',
                padding: '1% 2%',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              Enter Perfect Place
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginBottom: '5%' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black', marginRight: '2%', fontSize: '1.2vw' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'black', marginRight: '2%', fontSize: '1.2vw' }}>About</Link>
      <Link to="/services" style={{ textDecoration: 'none', color: 'black', marginRight: '2%', fontSize: '1.2vw' }}>Services</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2vw' }}>Contact</Link>
    </div>
  );
};

export default Homepage;
