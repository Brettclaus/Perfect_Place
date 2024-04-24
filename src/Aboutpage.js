import React from 'react';
import { Link } from 'react-router-dom';
import perfectPlaceIcon from './perfect_place_icon.png';
import backgroundImage from './background.png';

const AboutPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '5%' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: 'white', textAlign: 'left', fontSize: '4vw', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: '2px', marginBottom: '5%' }}>DataChefBrett</h1>
        {/* Placeholder feature */}
        <div style={{ backgroundColor: 'rgba(55, 99, 71, 0.6)', padding: '5%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginBottom: '5%', width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '3vw', marginBottom: '2%' }}>What We Do For You</h2>
          <p style={{ color: 'white', fontSize: '1.5vw' }}>Welcome to DataChefBrett.com, your trusted partner in restaurant consulting excellence. At DataChefBrett, we're more than just consultants — we're your dedicated team of industry experts committed to transforming your restaurant business through innovative solutions and strategic insights.

As specialists in technology integration, AI implementation, and cutting-edge analytics, we bring a wealth of knowledge and experience to the table. From optimizing your operations with sophisticated cost and labor analysis to crafting dynamic financial plans for sustainable growth, we're here to help you navigate the complexities of the modern restaurant landscape.

Our expertise extends beyond the numbers. We're passionate about menu design that not only delights your customers but also drives profitability. With seamless POS installations and comprehensive managed service contracts, we ensure that your systems run smoothly, allowing you to focus on what you do best — serving exceptional cuisine.

But our commitment doesn't stop there. We believe in the power of data to drive informed decision-making. That's why we offer managed service contracts to maintain your systems and keep your data pipelines flowing, enabling ongoing analysis and optimization.

At DataChefBrett, we're not just consultants; we're partners in your success. Let us unlock the full potential of your restaurant business and elevate your culinary journey to new heights.

</p>
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

export default AboutPage;
