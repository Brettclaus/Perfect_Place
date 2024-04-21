import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';
import NavigationBar from './NavigationBar';
import './FilterContainer.css';
import './NavigationBar.css';

// Define a custom marker icon
const dotIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const { BaseLayer, Overlay } = LayersControl;

const App = () => {
  const [housingCostActive, setHousingCostActive] = useState(true);
  const [foodCostActive, setFoodCostActive] = useState(true);
  const [incomeActive, setIncomeActive] = useState(true);
  const [taxRateActive, setTaxRateActive] = useState(true);
  const [daysOfSunActive, setDaysOfSunActive] = useState(true);
  const [inchesOfRainActive, setInchesOfRainActive] = useState(true);
  const [housingCostRange, setHousingCostRange] = useState([3000, 40000]);
  const [foodCostRange, setFoodCostRange] = useState([5000, 16000]);
  const [incomeRange, setIncomeRange] = useState([30000, 160000]);
  const [taxRateRange, setTaxRateRange] = useState([4, 20]);
  const [daysOfSunRange, setDaysOfSunRange] = useState([0, 365]);
  const [inchesOfRainRange, setInchesOfRainRange] = useState([0, 150]);
  const [markers, setMarkers] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState(null); // Add selectedCounty state variable
  const [showAnalytics, setShowAnalytics] = useState(false); // Add state for showing analytics container


  const filterMarkers = () => {
    const filteredMarkers = data.filter(marker => {
      const latitude = parseFloat(marker.latitude);
      const longitude = parseFloat(marker.longitude);
  
      return (
        !isNaN(latitude) &&
        !isNaN(longitude) &&
        latitude >= -90 &&
        latitude <= 90 &&
        longitude >= -180 &&
        longitude <= 180 &&
        (
          (!housingCostActive || (parseFloat(marker["Average of housing_cost"]) >= housingCostRange[0] && parseFloat(marker["Average of housing_cost"]) <= housingCostRange[1])) &&
          (!foodCostActive || (parseFloat(marker["Average of food_cost"]) >= foodCostRange[0] && parseFloat(marker["Average of food_cost"]) <= foodCostRange[1])) &&
          (!incomeActive || (parseFloat(marker["Average of median_family_income"]) >= incomeRange[0] && parseFloat(marker["Average of median_family_income"]) <= incomeRange[1])) &&
          (!taxRateActive || (parseFloat(marker["Average of total_tax_rate"]) >= taxRateRange[0] && parseFloat(marker["Average of total_tax_rate"]) <= taxRateRange[1])) &&
          (!daysOfSunActive || (parseInt(marker["Days of Sun"]) >= daysOfSunRange[0] && parseInt(marker["Days of Sun"]) <= daysOfSunRange[1])) &&
          (!inchesOfRainActive || (parseFloat(marker["Inches of Rain"]) >= inchesOfRainRange[0] && parseFloat(marker["Inches of Rain"]) <= inchesOfRainRange[1]))
        )
      );
    });
    setMarkers(filteredMarkers);
  };

  useEffect(() => {
    filterMarkers();
  }, [housingCostActive, foodCostActive, incomeActive, taxRateActive, daysOfSunActive, inchesOfRainActive, housingCostRange, foodCostRange, incomeRange, taxRateRange, daysOfSunRange, inchesOfRainRange]);

  const handleMarkerClick = (county) => {
    setSelectedCounty(county);
  };

  const handleAnalyticsClose = () => {
    setShowAnalytics(false); // Hide the analytics container
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Title Container
      <div className="title-container" style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '5px', borderRadius: '10px', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', zIndex: '1000' }}>
        <header>
          <h1>Perfect Place</h1>
        </header>
      </div> */}
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Filter Container */}
      <div className="filter-container" style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', zIndex: '1000' }}>
        <header>
          <h1> Perfect Place </h1>
          <h4>change your range, find your place...  </h4>
        </header>
        <div>
          <label style={{ width: '150px' }}>Housing Cost</label>
          <label style={{ width: '250px' }}>Range: {housingCostRange[0]} - {housingCostRange[1]}</label>
          <input type="range" min="3000" max="40000" value={housingCostRange[0]} onChange={(e) => setHousingCostRange([parseFloat(e.target.value), housingCostRange[1]])} />
          <input type="range" min="3000" max="40000" value={housingCostRange[1]} onChange={(e) => setHousingCostRange([housingCostRange[0], parseFloat(e.target.value)])} />
          <input type="checkbox" checked={housingCostActive} onChange={() => setHousingCostActive(!housingCostActive)} />
        </div>
        <div>
          <label style={{ width: '150px' }}>Food Cost</label>
          <label style={{ width: '250px' }}>Range: {foodCostRange[0]} - {foodCostRange[1]}</label>
          <input type="range" min="5000" max="16000" value={foodCostRange[0]} onChange={(e) => setFoodCostRange([parseFloat(e.target.value), foodCostRange[1]])} />
          <input type="range" min="5000" max="16000" value={foodCostRange[1]} onChange={(e) => setFoodCostRange([foodCostRange[0], parseFloat(e.target.value)])} />
          <input type="checkbox" checked={foodCostActive} onChange={() => setFoodCostActive(!foodCostActive)} />
        </div>
        <div>
          <label style={{ width: '150px' }}>Average Income</label>
          <label style={{ width: '250px' }}>Range: {incomeRange[0]} - {incomeRange[1]}</label>
          <input type="range" min="30000" max="160000" value={incomeRange[0]} onChange={(e) => setIncomeRange([parseFloat(e.target.value), incomeRange[1]])} />
          <input type="range" min="30000" max="160000" value={incomeRange[1]} onChange={(e) => setIncomeRange([incomeRange[0], parseFloat(e.target.value)])} />
          <input type="checkbox" checked={incomeActive} onChange={() => setIncomeActive(!incomeActive)} />
        </div>
        <div>
          <label style={{ width: '150px' }}>Average Tax Rate</label>
          <label style={{ width: '250px' }}>Range: {taxRateRange[0]} - {taxRateRange[1]}</label>
          <input type="range" min="4" max="20" value={taxRateRange[0]} onChange={(e) => setTaxRateRange([parseFloat(e.target.value), taxRateRange[1]])} />
          <input type="range" min="4" max="20" value={taxRateRange[1]} onChange={(e) => setTaxRateRange([taxRateRange[0], parseFloat(e.target.value)])} />
          <input type="checkbox" checked={taxRateActive} onChange={() => setTaxRateActive(!taxRateActive)} />
        </div>
        <div>
          <label style={{ width: '150px' }}>Average Days of Sun</label>
          <label style={{ width: '250px' }}>Range: {daysOfSunRange[0]} - {daysOfSunRange[1]}</label>
          <input type="range" min="0" max="365" value={daysOfSunRange[0]} onChange={(e) => setDaysOfSunRange([parseInt(e.target.value), daysOfSunRange[1]])} />
          <input type="range" min="0" max="365" value={daysOfSunRange[1]} onChange={(e) => setDaysOfSunRange([daysOfSunRange[0], parseInt(e.target.value)])} />
          <input type="checkbox" checked={daysOfSunActive} onChange={() => setDaysOfSunActive(!daysOfSunActive)} />
        </div>
        <div>
          <label style={{ width: '250px' }}>Average Inches of Rain</label>
          <label style={{ width: '250px' }}>Range: {inchesOfRainRange[0]} - {inchesOfRainRange[1]}</label>
          <input type="range" min="0" max="150" value={inchesOfRainRange[0]} onChange={(e) => setInchesOfRainRange([parseFloat(e.target.value), inchesOfRainRange[1]])} />
          <input type="range" min="0" max="150" value={inchesOfRainRange[1]} onChange={(e) => setInchesOfRainRange([inchesOfRainRange[0], parseFloat(e.target.value)])} />
          <input type="checkbox" checked={inchesOfRainActive} onChange={() => setInchesOfRainActive(!inchesOfRainActive)} />
        </div>
      </div>
      <MapContainer center={[37.0902, -95.7129]} zoom={5} style={{ height: 'calc(100% - 10px)', width: '100%', position: 'absolute', top: '0', left: '0' }}>
        <LayersControl position="topleft">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="OpenTopoMap">
            <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="Google Maps">
            <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap HOT">
            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="Esri Street Map">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
          </BaseLayer>
        </LayersControl>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={dotIcon}
            eventHandlers={{ click: () => handleMarkerClick(marker) }} // Add event handler for marker click

          >
            <Popup>
              <h3>{marker.County}, {marker.State}</h3>
              <p>Housing Cost: {marker["Average of housing_cost"]}</p>
              <p>Food Cost: {marker["Average of food_cost"]}</p>
              <p>Median Family Income: {marker["Average of median_family_income"]}</p>
              <p>Total Tax Rate: {marker["Average of total_tax_rate"]}</p>
              <p>Days of Sun: {marker["Days of Sun"]}</p>
              <p>Inches of Rain: {marker["Inches of Rain"]}</p>
              <p>{marker["ChatGPT_Info"]}</p>
              {/* Add link to open analytics container */}
              <a href="#" onClick={() =>     setShowAnalytics(true) // Show the analytics container
                }>View Analytics</a>
 
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Analytics container */}
      {showAnalytics && (
        <div className="analytics-container">
          <h3>{selectedCounty ? `${selectedCounty.County}, ${selectedCounty.State}` : "Analytics"}</h3>
          {/* Add analytics content here */}
          <button onClick={handleAnalyticsClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
