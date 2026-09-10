function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>{weather.city}</h2>
      <h1>{weather.temperature}°C</h1>
      <p>{weather.description}</p>

      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;