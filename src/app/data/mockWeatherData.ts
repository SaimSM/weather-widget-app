export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
}

const mockWeatherData: WeatherData[] = [
  { city: "Karachi", country: "Pakistan", temperature: 32, condition: "Sunny" },
  { city: "New York", country: "USA", temperature: 15, condition: "Cloudy" },
  { city: "Tokyo", country: "Japan", temperature: 22, condition: "Rainy" },
  { city: "Paris", country: "France", temperature: 18, condition: "Partly Cloudy" },
];

export default mockWeatherData;
