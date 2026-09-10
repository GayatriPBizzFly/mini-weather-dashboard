import { getWeatherByCity } from "../services/weatherService.js";

export async function getWeather(req, res) {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      });
    }

    const weather = await getWeatherByCity(city);

    res.json(weather);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch weather",
    });
  }
}