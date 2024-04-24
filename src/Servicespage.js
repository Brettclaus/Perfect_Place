import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import serviceDescriptions from './ServiceDescriptions';
import perfectPlaceIcon from './perfect_place_icon.png';
import backgroundImage from './background.png';

const ServicePage = () => {
  const text = "DataChefBrett".split("");
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '5%' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', marginTop: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: 'white', textAlign: 'left', fontSize: '4vw', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '2px', marginBottom: '5%' }}>
          {text.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'left', width: '100%', marginBottom: '5%' }}>
          {Object.entries(serviceDescriptions).map(([title, description], index) => (
            <ServiceBox key={index} title={title} description={description} />
          ))}
        </div>
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

const ServiceBox = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5); // Adjust the delay time as needed
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      style={{
        marginBottom: '1%',
        width: expanded ? '90%' : 'calc(40% - 5%)', // Expand width when expanded
        height: expanded ? '105%' : 'fit-content', // Adjust height dynamically
        cursor: 'pointer',
        borderRadius: '10px',
        transition: 'width 1.5s, height .5s', // Add transition for smooth animation
        opacity: loaded ? 1 : 0, // Set opacity to 0 initially and animate to 1
        y: loaded ? 0 : 100, // Slide up from the bottom when loaded
      }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      onClick={toggleExpand}
    >
      <motion.div
        style={{
          padding: '2%',
          margin: '2%',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: 'rgba(249, 249, 249, 0.8)',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'width .5s, height .1s', // Add transition for smooth animation
        }}
      >
        <h3 style={{ color: '#333', fontSize: '2vw', marginBottom: '1%' }}>{title}</h3>
        {expanded && <p style={{ color: '#666', fontSize: '1.5vw', lineHeight: '1.5' }}>{description}</p>}
      </motion.div>
    </motion.div>
  );
};


export default ServicePage;
