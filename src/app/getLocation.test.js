import { getLocation } from './getLocation';

describe('get location', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ city: 'Novosibirsk', loc: '55.030204,82.920430' }),
    }),
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  it('Check city and coordinates', async () => {
    const temp = await getLocation();

    expect(temp.city).toBe('Novosibirsk');
    expect(temp.coordinates).toEqual(['55.030204', '82.920430']);
  });
});

describe('get location fail', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('return null if promise rejected', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('Error'));
    const tempFail = await getLocation();
    expect(tempFail).toBe(null);
  });
});
