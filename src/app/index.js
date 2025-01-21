import { initPage } from './initPage.js';
import { getWeather } from './weather.js';
import {
  setLocalStorageItem,
  getLocalStorageItem,
  addCity,
} from './localstorage.js';
import './style.css';
import { getLocation } from './getLocation.js';
import { updateMap } from './map.js';
export function inputCity(input) {
  const cityKey = 'citylist';
  const historyCity = getLocalStorageItem(cityKey);
  input = document.querySelector('.inputCity');
  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && input.value != '') {
      const city = input.value;
      input.value = '';
      if (historyCity != null) {
        addCity(historyCity, city);
      }
      setLocalStorageItem(cityKey, historyCity);
      updateWeather(city);
      updateHistoryList(city, document);
    }
  });
}

export function updateHistoryList(city, el) {
  if (el.querySelectorAll('.liHistory').length == 10) {
    el.querySelectorAll('.liHistory')[9].remove();
  }
  const li = document.createElement('li');
  li.innerHTML = city;
  li.className = 'liHistory';
  el.querySelector('.historyCity').prepend(li);
}

export function addLinks() {
  document.querySelector('.historyCity').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
      const city = ev.target.innerHTML;
      updateWeather(city);
    }
  });
}

export function loadHistoryList() {
  const key = 'citylist';
  const result = getLocalStorageItem(key);
  if (result) {
    result.forEach((element) => {
      if (element != null) {
        const li = document.createElement('li');
        li.className = 'liHistory';
        li.innerHTML = element;
        document.querySelector('.historyCity').appendChild(li);
      } else {
        return null;
      }
    });
  }
}

export function addWeather(weather) {
  if (weather) {
    document.querySelector('.InfoCity').innerText = `${weather.city}`;
    document.querySelector('.InfoTemp').innerText = `${weather.temperature}`;
    document.querySelector('.iconWeather').innerHTML =
      `<img src="https://openweathermap.org/img/wn/` +
      weather.icon +
      `@2x.png">`;
  }
}

export async function updateWeather(city) {
  try {
    const weather = await getWeather(city);
    if (weather) {
      addWeather(weather);
      updateMap(weather.coordinates, document.querySelector('.fakePosition'));
    }
  } catch {
    console.log('Wrong city name');
  }
}

export async function setFirstLocation() {
  const currentLocation = await getLocation();
  const firstCity = currentLocation.city;
  const firstCityCoord = currentLocation.coordinates;
  updateWeather(firstCity);
  updateMap(firstCityCoord, document.querySelector('.fakePosition'));
}

document.addEventListener('DOMContentLoaded', async (ev) => {
  ev = document.querySelector('.mainContainer');
  initPage(ev);
  loadHistoryList();
  inputCity();
  addLinks();
  setFirstLocation();
});
