import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import intro from './Introduction';
import perfectPlaceIcon from './perfect_place_icon.png';
import backgroundImage from './background.png';

const ServicePage = () => {
  const DCB = "DataChefBrett".split("");
  const text = intro.text.split("");
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '5%' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', marginTop: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: 'white', textAlign: 'left', fontSize: '4vw', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '2px', marginBottom: '5%' }}>
          {DCB.map((char, index) => (
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
        <p3 style={{ color: 'white', textAlign: 'left', fontSize: '2vw', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '2px', marginBottom: '5%' }}>
          {text.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: .5 }}
              transition={{ duration: 3, delay: index * 0.01 }}
            >
              {char}
            </motion.span>
          ))}
        </p3>
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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{
      marginBottom: '5%',
      width: 'calc(40% - 5%)',
      cursor: 'pointer',
      borderRadius: '10px',
    }} onClick={toggleExpand}>
      <div style={{
        padding: '2%',
        margin: '2%',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: 'rgba(249, 249, 249, 0.8)',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      }}>
        <h3 style={{ color: '#333', fontSize: '2vw', marginBottom: '5%' }}>{title}</h3>
        {expanded && <p style={{ color: '#666', fontSize: '1.5vw', lineHeight: '1.5' }}>{description}</p>}
      </div>
    </div>
  );
};

export default ServicePage;
