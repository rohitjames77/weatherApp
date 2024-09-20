import { fetchApi } from "./inputAPI";

let minTemp = document.querySelector(".min-temp");
let maxTemp = document.querySelector(".max-temp");
let sunrise = document.querySelector(".sunrise");
let sunset = document.querySelector(".sunset");
let condition = document.querySelector(".condition");
let gifBackdrop = document.querySelector(".weather_backImage");
let locationHeading = document.querySelector('.location');
let humidity = document.querySelector('.humidity');
let toggle = document.querySelector('.toggle-label');
let toggleCheckbox = document.querySelector('.toggle-input');

async function displayData() {
  try {
    const dataDetails = await fetchApi();
    const giphyInput = dataDetails.conditions;
    minTemp.textContent = `Max Temperature ${dataDetails.minTemp}*F`;
    maxTemp.textContent = `Min Temperature${dataDetails.maxTemp}*F`;
    sunrise.textContent = `Sunrise  ${dataDetails.sunrise} AM`;
    sunset.textContent = `Sunset ${dataDetails.sunset} PM`;
    condition.textContent = `Weather Condition ${dataDetails.conditions}`;
    locationHeading.textContent = dataDetails.address;
    humidity.textContent = `Humidity ${dataDetails.humidity} %`;
    try {
      await fetchGiphy(giphyInput);
    } catch (error) {
      console.log(`FetchGiphy Error`, error);
    }
  } catch (error) {
    console.error(` DISPLAY ERROR ALERT --->>>>`, error);
  }
}
displayData();

async function fetchGiphy(giphyInput) {
  const cleanData = giphyInput.replace(/ +/g, "+");
  try {
    const giphyResponse = await fetch(
      `https://pixabay.com/api/videos/?key=46034173-e52081f55a72a68d31387c202&q=${cleanData}`,
      { mode: "cors" }
    );
    let gifData = await giphyResponse.json();
    console.log(gifData);
    const giphyUrl = gifData.hits[0].videos.medium.url;
    console.log(giphyUrl);
    gifBackdrop.src = giphyUrl;
  } catch (error) {
    console.log(error);
  }
}

toggleCheckbox.addEventListener('click',changeTempUnit)
function changeTempUnit(){
  if (this.checked===true){
     console.log(toggle.getAttribute('data-on'));
     convertFahrenheitToCelsius();
  }else{
   minTemp.textContent = localStorage.getItem('minTemp')+'*F';
   maxTemp.textContent = localStorage.getItem('maxTemp')+'*F'; 
  }
  // const value = this.checked ? toggle.getAttribute('data-on') : toggle.getAttribute('data-off');
  
}
  
//    Formula for fahrenheit to celsius if  F-32 x5/9 = C
function convertFahrenheitToCelsius() {
  const fahrenheitMax = localStorage.getItem('maxTemp');
  const fahrenhietMin = localStorage.getItem('minTemp');

  const celsiusMaxCalc = ((fahrenheitMax - 32) * 5) / 9;
  const celsiusMinCalc = ((fahrenhietMin - 32) * 5) / 9;
  const celsiusMax = celsiusMaxCalc.toPrecision(4);
  const celsiusMin =celsiusMinCalc.toPrecision(4);
  console.log(celsiusMax);
  console.log(celsiusMin);
  displayCelsius(celsiusMax,celsiusMin)
}

function displayCelsius(celsiusMax,celsiusMin){
minTemp.textContent = `${celsiusMin}*C`;
maxTemp.textContent =`${celsiusMax}*C`;
}

// °F = °C × (9/5) + 32.
