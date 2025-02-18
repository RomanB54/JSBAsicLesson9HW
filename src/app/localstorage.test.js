import {
  setLocalStorageItem,
  getLocalStorageItem,
  addCity,
} from './localstorage';

describe('Set/get local storage item', () => {
  const setLocalStorageItemSpy = jest.spyOn(Storage.prototype, 'setItem');
  const getLocalStorageItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  afterEach(() => {
    setLocalStorageItemSpy.mockRestore();
    getLocalStorageItemSpy.mockRestore();
  });
  const mockStorage = {
    KEY: 'cities',
    VALUE: ['Novosibirsk', 'Moscow', 'Samara'],
  };
  it('Spy on set local storage item', () => {
    setLocalStorageItem(mockStorage.KEY, mockStorage.VALUE);
    expect(setLocalStorageItemSpy).toHaveBeenCalledWith(
      mockStorage.KEY,
      JSON.stringify(mockStorage.VALUE),
    );
    getLocalStorageItem(mockStorage.KEY);
    expect(getLocalStorageItemSpy).toHaveBeenCalledWith(mockStorage.KEY);
  });
});

describe('Test addCity function', () => {
  let testArr = [];
  afterEach(() => {
    testArr = [];
  });
  it('Check new item in array with fixed length', () => {
    addCity(testArr, 'Novosibirsk');
    expect(testArr[0]).toBe('Novosibirsk');
    expect(testArr).toEqual(['Novosibirsk', , , , , , , , ,]);
  });

  it('Check the same item in array', () => {
    addCity(testArr, 'Novosibirsk');
    addCity(testArr, 'Samara');
    addCity(testArr, 'Novosibirsk');
    expect(testArr[0]).toBe('Novosibirsk');
    expect(testArr).toEqual(['Novosibirsk', 'Samara', , , , , , , ,]);
  });
});
describe('Test a list length', () => {
  let testArr = [];
  afterEach(() => {
    testArr = [];
  });
  it('Check array length limitation by 10', () => {
    testArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    addCity(testArr, '11');
    expect(testArr.length).toBe(10);
    expect(testArr).toEqual([
      '11',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ]);
  });
});
