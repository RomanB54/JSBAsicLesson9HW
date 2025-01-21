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
                <li class="InfoCity">
                <li class="InfoTemp">
                </ul>
                <div class = "iconWeather">
                </div>
            </div>
            <div class="layer4">
                <p class="showWeather">History</p>
                <ul class="historyCity">
                </ul>
            </div>
        </div>`;
}
