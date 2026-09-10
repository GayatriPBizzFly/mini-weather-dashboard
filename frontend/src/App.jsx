import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>🌤 Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {error && <p>{error}</p>}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;