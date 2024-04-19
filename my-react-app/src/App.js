import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';

// Define a custom marker icon
const dotIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const App = () => {
  const [minHousingCost, setMinHousingCost] = useState(0);
  const [maxHousingCost, setMaxHousingCost] = useState(100000);
  const [minFoodCost, setMinFoodCost] = useState(0);
  const [maxFoodCost, setMaxFoodCost] = useState(100000);
  const [minIncome, setMinIncome] = useState(0);
  const [maxIncome, setMaxIncome] = useState(1000000);
  const [minTaxRate, setMinTaxRate] = useState(0);
  const [maxTaxRate, setMaxTaxRate] = useState(20);
  const [minDaysOfSun, setMinDaysOfSun] = useState(0);
  const [maxDaysOfSun, setMaxDaysOfSun] = useState(365);
  const [minInchesOfRain, setMinInchesOfRain] = useState(0);
  const [maxInchesOfRain, setMaxInchesOfRain] = useState(1000);
  const [markers, setMarkers] = useState([]);

  const filterMarkers = () => {
    const filteredMarkers = data.filter(marker => {
      const latitude = parseFloat(marker.latitude);
      const longitude = parseFloat(marker.longitude);

      return (
        !isNaN(latitude) && !isNaN(longitude) &&
        latitude >= -90 && latitude <= 90 &&
        longitude >= -180 && longitude <= 180 &&
        parseFloat(marker["Average of housing_cost"]) >= minHousingCost &&
        parseFloat(marker["Average of housing_cost"]) <= maxHousingCost &&
        parseFloat(marker["Average of food_cost"]) >= minFoodCost &&
        parseFloat(marker["Average of food_cost"]) <= maxFoodCost &&
        parseFloat(marker["Average of median_family_income"]) >= minIncome &&
        parseFloat(marker["Average of median_family_income"]) <= maxIncome &&
        parseFloat(marker["Average of total_tax_rate"]) >= minTaxRate &&
        parseFloat(marker["Average of total_tax_rate"]) <= maxTaxRate &&
        parseInt(marker["Days of Sun"]) >= minDaysOfSun &&
        parseInt(marker["Days of Sun"]) <= maxDaysOfSun &&
        parseFloat(marker["Inches of Rain"]) >= minInchesOfRain &&
        parseFloat(marker["Inches of Rain"]) <= maxInchesOfRain
      );
    });
    setMarkers(filteredMarkers);
  };

  useEffect(() => {
    filterMarkers();
  }, [minHousingCost, maxHousingCost, minFoodCost, maxFoodCost, minIncome, maxIncome, minTaxRate, maxTaxRate, minDaysOfSun, maxDaysOfSun, minInchesOfRain, maxInchesOfRain]);

  return (
    <div>
      <div>
        <label>Min Housing Cost: {minHousingCost}</label>
        <input type="range" min="0" max="10000" value={minHousingCost} onChange={(e) => setMinHousingCost(parseFloat(e.target.value))} />
        <label>Max Housing Cost: {maxHousingCost}</label>
        <input type="range" min="0" max="10000" value={maxHousingCost} onChange={(e) => setMaxHousingCost(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Min Food Cost: {minFoodCost}</label>
        <input type="range" min="0" max="10000" value={minFoodCost} onChange={(e) => setMinFoodCost(parseFloat(e.target.value))} />
        <label>Max Food Cost: {maxFoodCost}</label>
        <input type="range" min="0" max="10000" value={maxFoodCost} onChange={(e) => setMaxFoodCost(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Min Income: {minIncome}</label>
        <input type="range" min="0" max="100000" value={minIncome} onChange={(e) => setMinIncome(parseFloat(e.target.value))} />
        <label>Max Income: {maxIncome}</label>
        <input type="range" min="0" max="100000" value={maxIncome} onChange={(e) => setMaxIncome(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Min Tax Rate: {minTaxRate}</label>
        <input type="range" min="0" max="20" value={minTaxRate} onChange={(e) => setMinTaxRate(parseFloat(e.target.value))} />
        <label>Max Tax Rate: {maxTaxRate}</label>
        <input type="range" min="0" max="20" value={maxTaxRate} onChange={(e) => setMaxTaxRate(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Min Days of Sun: {minDaysOfSun}</label>
        <input type="range" min="0" max="365" value={minDaysOfSun} onChange={(e) => setMinDaysOfSun(parseInt(e.target.value))} />
        <label>Max Days of Sun: {maxDaysOfSun}</label>
        <input type="range" min="0" max="365" value={maxDaysOfSun} onChange={(e) => setMaxDaysOfSun(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Min Inches of Rain: {minInchesOfRain}</label>
        <input type="range" min="0" max="100" value={minInchesOfRain} onChange={(e) => setMinInchesOfRain(parseFloat(e.target.value))} />
        <label>Max Inches of Rain: {maxInchesOfRain}</label>
        <input type="range" min="0" max="100" value={maxInchesOfRain} onChange={(e) => setMaxInchesOfRain(parseFloat(e.target.value))} />
      </div>
      <MapContainer center={[37.0902, -95.7129]} zoom={5} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={dotIcon}
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;
