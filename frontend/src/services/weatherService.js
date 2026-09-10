export async function getWeather(city) {
  const response = await fetch(
    `http://localhost:5000/api/weather?city=${city}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather");
  }

  return response.json();
}