import React, {useState} from 'react';
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
      <div style={{ width: ' 50%', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left', marginTop: '5%', marginLeft: '5%' }}>
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
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '5%' }}>
          <ContactPage/>
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

const ContactPage = () => {
  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '5%' }}>
      <h1>Contact Us</h1>
      <p>Have a question or feedback? We'd love to hear from you!</p>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" style={{ marginBottom: '2%', padding: '1%', width: '100%' }} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ marginBottom: '2%', padding: '1%', width: '100%' }} required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" style={{ marginBottom: '2%', padding: '1%', width: '100%' }} required></textarea>
        
        <button type="submit" style={{ padding: '1%', width: '50%', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  );
};
export default ServicePage;
