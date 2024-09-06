import {returnUserTextInput,returnUserStartDateInput,returnUserEndDateInput,} from './inputStorage'

const baseURL ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=NTV85PXGEFFBCHC42DLFKNLY6'

const location = returnUserTextInput();
const date1 = returnUserStartDateInput();
const date2 =returnUserEndDateInput();

function concatInput(){
 const inputStr=location.concat(date1,date2);
console.log(inputStr);
 return inputStr;
}
const inputStr=concatInput();

function editInput(){

}

// export{inputStr};