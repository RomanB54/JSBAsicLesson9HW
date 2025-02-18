import { updateMap } from './map';

describe('Get an object by request of right coordinates', () => {
  let el, fakeCoordinates;
  beforeEach(() => {
    el = document.createElement('img');
    el.src = 'fakePosition';
    fakeCoordinates = '55.030204,82.920430';
  });
  it('Generate a html element img with link by coordinates', () => {
    updateMap(fakeCoordinates, el);
    expect(el.src).toBe(
      'https://static-maps.yandex.ru/v1?lang=ru_RU&ll=55.030204,82.920430&spn=0.3,0.3&size=400,400&apikey=e091f93b-1d71-4a7d-ae59-8369de3754d8',
    );
  });
});
