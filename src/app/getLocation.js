export async function getLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=7ce0407bb7be70');
    const jsonResponse = await response.json();
    let city;
    let coordinates;
    city = jsonResponse.city;
    const splittedCoord = jsonResponse.loc.split(',');
    coordinates = [splittedCoord[0], splittedCoord[1]];
    return { city, coordinates };
  } catch {
    return null;
  }
}
