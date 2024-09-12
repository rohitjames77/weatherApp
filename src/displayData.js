import { destructureData } from "./inputAPI";

let minTemp = document.querySelector('.min-temp');
let maxTemp = document.querySelector('.max-temp');
let sunrise= document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let humidity= document.querySelector('.humidity');
let condition = document.querySelector('.condition');
let fellLike = document.querySelector('.feels-like');
let weatherIcon = document.querySelector('.weather-icon');


async function displayData(){
  try {
    const data = await destructureData();
    console.log(data);
    return data ;
  } catch (error) {
    console.error("Error in DisplayData:", error);
  }
}
displayData();

export{displayData}