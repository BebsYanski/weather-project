import { weatherSchema } from "./schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude={part,minutely,alerts}&appid=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return weatherSchema.parse(data);
}
