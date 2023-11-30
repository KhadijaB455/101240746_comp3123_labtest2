// This contains all css and weather information 
import React from 'react';

const WeatherInfo = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    return `${hours}:${minutes.substr(-2)}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.city}>{data.name}, {data.sys.country}</h2>
      <div style={styles.weatherContainer}>
        <img src={iconUrl} alt={data.weather[0].description} style={styles.weatherIcon} />
        <div style={styles.details}>
          <p style={styles.temperature}>Temperature: {data.main.temp} °C</p>
          <p style={styles.weatherDescription}>Weather: {data.weather[0].description}</p>
          <p style={styles.info}>Feels Like: {data.main.feels_like} °C</p>
          <p style={styles.info}>Min Temperature: {data.main.temp_min} °C</p>
          <p style={styles.info}>Max Temperature: {data.main.temp_max} °C</p>
          <p style={styles.info}>Pressure: {data.main.pressure} hPa</p>
          <p style={styles.info}>Humidity: {data.main.humidity}%</p>
          <p style={styles.info}>Wind Speed: {data.wind.speed} m/s</p>
          <p style={styles.info}>Wind Direction: {data.wind.deg}°</p>
          <p style={styles.info}>Visibility: {data.visibility} meters</p>
          <p style={styles.info}>Cloudiness: {data.clouds.all}%</p>
          <p style={styles.info}>Sunrise: {formatDate(data.sys.sunrise)}</p>
          <p style={styles.info}>Sunset: {formatDate(data.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};



const styles = {
    container: {
      background: '#fff',
      border: '1px solid #ddd',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%',
      boxSizing: 'border-box',
    },
    city: {
      fontSize: '28px',
      marginBottom: '10px',
      color: '#333',
    },
    weatherContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    weatherIcon: {
      marginRight: '20px',
      width: '80px',
      height: '80px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    mainInfo: {
      marginRight: '20px',
    },
    temperature: {
      fontSize: '24px',
      margin: '0',
      color: '#333',
    },
    weatherDescription: {
      fontSize: '20px',
      margin: '0',
      color: '#555',
    },
    info: {
      fontSize: '18px',
      margin: '0',
      color: '#777',
    },
  };
  

export default WeatherInfo;


  
  

