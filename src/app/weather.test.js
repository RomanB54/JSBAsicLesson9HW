import { getWeather } from './weather';

describe('get weather', () => {
  const mockValue = {
    name: 'Novosibirsk',
    main: {
      temp: 1,
    },
    coord: {
      lon: 55.030204,
      lat: 82.92043,
    },
    weather: [
      {
        icon: 1,
      },
    ],
    cod: 200,
  };

  it('Resolve request to get city name, coordinates, temperature and icon', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockValue),
    });
    const temp = await getWeather('Novosibirsk');
    expect(temp).toEqual({
      city: 'Novosibirsk',
      temperature: 1,
      coordinates: [55.030204, 82.92043],
      icon: 1,
    });
    global.fetch.mockReset();
  });
  it('getWeatherInCity returns not found', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ cod: 400 }),
    });
    const tempNull = await getWeather('Novosibirsk');
    expect(tempNull).toBeNull();
    global.fetch.mockReset();
  });
});
