// App.js (Main component)
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Homepage from './Homepage';
import MapPage from './MapPage';
import ContactPage from './Contactpage';
import AboutPage from './Aboutpage';
import ServicePage from './Servicespage';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />}  />
      <Route path="/services" element={<ServicePage />}  />
    </Routes>
  </Router>
  );
};

export default App;
