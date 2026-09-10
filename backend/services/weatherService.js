import axios from "axios";

export async function getWeatherByCity(city) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: process.env.WEATHER_API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
}