export function initPage(el) {
  el.innerHTML = `
    <div class="layer1">
            <div class="layer2">
                <label for="search">Enter a city name and press enter</label>
                <input class="inputCity" id = "search" type="text">
                <img class="fakePosition" src=''/>
            </div>
            <div class="layer3">
                <p class="showWeather">Weather info</p>
                <ul class=infoWeather>
                <li class="InfoCity">{{city}}</li>
                <li class="InfoTemp">{{temperature}}</li>
                </ul>
                <div class = "iconWeather"><img src="https://openweathermap.org/img/wn/{{icon}}@2x.png">
                </div>
            </div>
            <div class="layer4">
                <p class="showWeather">History</p>
                <ul class="historyCity">
                </ul>
            </div>
        </div>`;
}
