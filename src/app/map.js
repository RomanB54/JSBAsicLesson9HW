export function updateMap(coordinates, srcURL) {
  const URL =
    'https://static-maps.yandex.ru/v1?lang=ru_RU&ll=' +
    `${coordinates}` +
    '&spn=0.3,0.3&size=400,400&apikey=e091f93b-1d71-4a7d-ae59-8369de3754d8';
  srcURL.src = URL;
}
