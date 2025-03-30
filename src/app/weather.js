export async function getWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50e9562e52bdc95310309ebf4c74c77c&units=metric&lang=en`,
  );
  const data = await response.json();
  let city;
  let temperature;
  let icon;
  let coordinates;
  if (data.cod === 200) {
    city = data.name;
    temperature = Math.round(data.main.temp);
    icon = data.weather[0].icon;
    coordinates = [data.coord.lon, data.coord.lat];
  } else {
    return null;
  }
  return { city, temperature, icon, coordinates };
}
