import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCalgary = () => {
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/calgary?unitGroup=us&key=TYV6Q35RDDCDNCARBFUBFXT35&contentType=json`;
  
      axios
        .get(apiUrl)
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.error('Error fetching weather data:', error));
    }, []);
  
    return (
      <div>
        {weatherData ? (
          <div>
            <p>Temperature: {weatherData.currentConditions.temp}ºF; 
               Condition: {weatherData.currentConditions.conditions};
               Updated on: {weatherData.currentConditions.datetime}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    );
  };
  
  export default WeatherCalgary;