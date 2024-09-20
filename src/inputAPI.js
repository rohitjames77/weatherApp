const startDate = document.querySelector(".left_date");
const submit = document.querySelector(".weatherApp_submit");
const textInput = document.querySelector(".weather_input");
let loader = document.querySelector('.loader-container');

// let maxtemp = document.querySelector(".max-temp");
// let minTemp = document.querySelector(".min-temp");
// let condition = document.querySelector(".condition");

submit.addEventListener("click", handleFormData);

function handleFormData() {
let inputRaw = textInput.value;
 let input =inputRaw.replace(/\s+/g,'').toLowerCase();


   localStorage.setItem("location",input);
  localStorage.setItem("date1", startDate.value);
}

async function fetchApi() {
  let input = localStorage.getItem("location").concat("/");
  let startDateInput = localStorage.getItem("date1").concat("/");
 
 

  if (input && startDateInput!= ''){
    try {
      loader.style.display = 'block';
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}${startDateInput}?key=BVX99EMRJ94CNJTZBG8QPF2AV`,
        { mode: "cors" }
      );
      const data = await response.json();
      loader.style.display='none';
      console.log(data.resolvedAddress);
      
      const dataDetails = {
            address:data.resolvedAddress,
            cloudCover: data.days[0].cloudcover,
            conditions: data.days[0].conditions,
            dew: data.days[0].dew,
            feelslike: data.days[0].feelslike,
            humidity: data.days[0].humidity,
            weatherIcon: data.days[0].icon,
            sunrise: data.days[0].sunrise,
            sunset: data.days[0].sunset,
            maxTemp: data.days[0].tempmax,
            minTemp: data.days[0].tempmin,
          };
        localStorage.setItem('maxTemp',dataDetails.maxTemp);
        localStorage.setItem('minTemp',dataDetails.minTemp);

        return dataDetails;
      
    } catch (error) {
      console.error(`ERROR ALERT`, error);
    }
  }
  
}







export{fetchApi}
