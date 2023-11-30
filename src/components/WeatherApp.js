
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import SearchBar from './SearchBar';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto');
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        setError('Error fetching weather data. Please try again.');
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, apiKey]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1 className="weather-app-heading">Weather App</h1>
      <SearchBar setCity={setCity} />
  
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};



export default WeatherApp;

