export function setLocalStorageItem(key, value) {
  const cityValue = JSON.stringify(value);
  return localStorage.setItem(key, cityValue);
}

export function getLocalStorageItem(key) {
  let result;
  try {
    result = JSON.parse(localStorage.getItem(key));
  } catch (err) {
    result = null;
  }
  return result;
}

export function addCity(arr, city) {
  if (arr.includes(city) === true) {
    arr.splice(arr.indexOf(city), 1);
    arr.unshift(city);
    return arr;
  } else {
    if (arr.length === 10) {
      arr.pop();
      arr.unshift(city);
      return arr;
    } else {
      arr.unshift(city);
      return arr;
    }
  }
}
