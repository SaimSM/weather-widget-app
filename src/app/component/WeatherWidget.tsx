'use client';
import { useState } from 'react';
import mockWeatherData, { WeatherData } from '../data/mockWeatherData';

const WeatherWidget = () => {
  const [selectedCity, setSelectedCity] = useState<WeatherData | null>(null);
  const [customData, setCustomData] = useState<WeatherData[]>([]);
  const [newCity, setNewCity] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newTemperature, setNewTemperature] = useState<number | ''>('');
  const [newCondition, setNewCondition] = useState('');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    const weatherInfo = [...mockWeatherData, ...customData].find((data) => data.city === city) || null;
    setSelectedCity(weatherInfo);
  };

  const addCustomData = () => {
    if (newCity && newCountry && newTemperature !== '' && newCondition) {
      const newWeather: WeatherData = {
        city: newCity,
        country: newCountry,
        temperature: Number(newTemperature),
        condition: newCondition,
      };
      setCustomData([...customData, newWeather]);
      setNewCity('');
      setNewCountry('');
      setNewTemperature('');
      setNewCondition('');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-xl shadow-lg w-full max-w-md mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Weather Widget</h2>

      <select
        onChange={handleCityChange}
        defaultValue=""
        className="p-2 rounded w-full mb-6 bg-gray-200 text-gray-800 text-center"
      >
        <option value="" disabled>Select a city</option>
        {[...mockWeatherData, ...customData].map((data) => (
          <option key={data.city} value={data.city}>{data.city}</option>
        ))}
      </select>

      {selectedCity ? (
        <div className="text-center mb-6">
          <p className="text-2xl font-semibold">{selectedCity.city}, {selectedCity.country}</p>
          <p className="text-4xl font-bold mt-2">{selectedCity.temperature}°C</p>
          <p className="text-lg">{selectedCity.condition}</p>
        </div>
      ) : (
        <p className="text-center mb-6">Select a city to see the weather.</p>
      )}

      <div className="w-full mt-4 p-4 bg-gray-100 text-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Add Your Own Weather Data</h3>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="City"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            className="p-2 rounded bg-white border border-gray-300"
          />
          <input
            type="text"
            placeholder="Country"
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
            className="p-2 rounded bg-white border border-gray-300"
          />
          <input
            type="number"
            placeholder="Temperature (°C)"
            value={newTemperature}
            onChange={(e) => setNewTemperature(Number(e.target.value))}
            className="p-2 rounded bg-white border border-gray-300"
          />
          <input
            type="text"
            placeholder="Weather Condition (e.g., Sunny)"
            value={newCondition}
            onChange={(e) => setNewCondition(e.target.value)}
            className="p-2 rounded bg-white border border-gray-300"
          />
          <button
            onClick={addCustomData}
            className="p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 mt-3"
          >
            Add Weather Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
