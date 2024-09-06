import { longFormatters } from "date-fns";

const startDate = document.querySelector(".left_date");
const endDate = document.querySelector(".right_date");
const submit = document.querySelector(".weatherApp_submit");
const textInput = document.querySelector(".weather_input");

submit.addEventListener('click',handleFormData)

function handleFormData(event){
  event.preventDefault();
localStorage.setItem('location',textInput.value);
localStorage.setItem('date1',startDate.value);
localStorage.setItem('date2',endDate.value);

  const input = localStorage.getItem('location').concat('/');
  const startDateInput = localStorage.getItem('date1').concat('/');
  const endDateInput = localStorage.getItem('date2');
   
  fetchApi(input,startDateInput,endDateInput);
}

 async function fetchApi(input,startDateInput,endDateInput){
try{
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}${startDateInput}${endDateInput}?key=XR2CXU282LP3EHK3NN7VRFEZU`,{mode:'cors'});
console.log(response);
  const data = await response.json(); 
console.log(data);
displayData(data)
}
catch(error){
  console.error(`ERROR ALERT`,error);

}
} 

 function displayData(data){
console.log(data);

}
export {displayData};
// function getUserTextInput() {
//   return new Promise((resolve) => {
//     submit.addEventListener("click", (event) => {
//       let value = textInput.value;
//  event.preventDefault()
//       resolve(value);
//     });
//   });
// }

// async function returnUserTextInput() {
//   const rawInput = await getUserTextInput();
//   const input =rawInput.concat('/');
//   console.log(`userInput ${input}`);
//   return input;
// }
// returnUserTextInput();

// function getUserStartDateInput() {
//   return new Promise((resolve) => {
//     submit.addEventListener("click", (event) => {
//       let startDateVal = startDate.value;
//  event.preventDefault()
//       resolve(startDateVal);
//     });
//   });
// }

// async function returnUserStartDateInput() {
//   const startDateInputRaw = await getUserStartDateInput();
//   const startDateInput =startDateInputRaw.concat('/');
//   console.log(`userStartDate ${startDateInput}`);
//   return startDateInput;
// }
// returnUserStartDateInput();

// function getUserEndDateInput() {
//   return new Promise((resolve) => {
//     submit.addEventListener("click", (event) => {
//       let endDateVal = endDate.value;
//        event.preventDefault();
//       resolve(endDateVal);

//     });
//   });
// }

// async function returnUserEndDateInput() {
//   const endDateInput = await getUserEndDateInput();
//   console.log(`userEndDate ${endDateInput}`);
//   return endDateInput;
// }
// returnUserEndDateInput();

// export {
//   returnUserTextInput,
//   returnUserStartDateInput,
//   returnUserEndDateInput,
// };
