const startDate = document.querySelector(".left_date");
const endDate = document.querySelector(".right_date");
const submit = document.querySelector(".weatherApp_submit");
const textInput = document.querySelector(".weather_input");
let maxtemp = document.querySelector(".max-temp");
let minTemp = document.querySelector(".min-temp");
let condition = document.querySelector(".condition");

submit.addEventListener("click", handleFormData);

function handleFormData(event) {
  event.preventDefault();
  localStorage.setItem("location", textInput.value);
  localStorage.setItem("date1", startDate.value);
  localStorage.setItem("date2", endDate.value);

  
}
let input = localStorage.getItem("location").concat("/");
let startDateInput = localStorage.getItem("date1").concat("/");
let endDateInput = localStorage.getItem("date2");

async function fetchApi(input, startDateInput, endDateInput) {
  if (input && startDateInput && endDateInput != ''){
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}${startDateInput}${endDateInput}?key=NTV85PXGEFFBCHC42DLFKNLY6`,
        { mode: "cors" }
      )
      console.log(`response-->${response}`);
      
      return response;
    } catch (error) {
      console.error(`ERROR ALERT`, error);
    }
  }
  
}
fetchApi(input, startDateInput, endDateInput);

 async function getAwaitResponse (){
  let response = await fetchApi(input, startDateInput, endDateInput);
  console.log(response);
  let data =  await response.json();
  console.log(data);
  return data ; 
}
getAwaitResponse()

let tester = getAwaitResponse();
// function test(){
// //   tester.then((data)=>{
// // console.log(data.days[0].conditions);

// //   })
  
// }
// test();

  // const dataDetails = {
  //   cloudCover: data.days[0].cloudcover,
  //   conditions: data.days[0].conditions,
  //   dew: data.days[0].dew,
  //   feelslike: data.days[0].feelslike,
  //   humidity: data.days[0].humidity,
  //   weatherIcon: data.days[0].icon,
  //   sunrise: data.days[0].sunrise,
  //   sunset: data.days[0].sunset,
  //   maxTemp: data.days[0].tempmax,
  //   minTemp: data.days[0].tempmin,
  // };
 









// function destructureData(data) {
  

//   return { dataDetails };
// }



//    Formula for fahrenhiet to celsius if  F-32 x5/9 = C

function convertFahrenheitToCelsius(data) {
  const fahrenheitMax = data.days[0].tempmax;
  const fahrenhietMin = data.days[0].tempmin;

  const celsiusMax = ((fahrenheitMax - 32) * 5) / 9;
  const celsiusMin = ((fahrenhietMin - 32) * 5) / 9;
  console.log(celsiusMax);
  console.log(celsiusMin);
  return fahrenheitMax;
}

export { fetchApi, convertFahrenheitToCelsius,tester};
