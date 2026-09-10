import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Weather Dashboard Backend is running!");
});

// Weather API route
// Weather API route
app.get("/api/weather", async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        error: "City is required",
      });
    }

    const API_KEY = process.env.WEATHER_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        error: "Weather API key is missing",
      });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Unable to fetch weather",
      });
    }

    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    });
  } catch (error) {
    console.error("Weather API Error:", error);

    res.status(500).json({
      error: "Failed to fetch weather data",
    });
  }
});
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});