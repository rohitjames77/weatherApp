const submit = document.querySelector(".weatherApp_submit");

const inputText = document.querySelector(".weather_input");

// let test= 'hello world';
// let testTrim = test.replace(/\s+/g,'');
// console.log(testTrim);

const regex = new RegExp("^[a-zA-Z]+$", "g");
const error = document.querySelector(".error_message");

submit.addEventListener("click", checkValidation);
function checkValidation(event) {
  let inputVal = inputText.value;
  if (inputVal === "") {
    event.stopPropagation();
    event.preventDefault();
    inputText.style.border = "2px solid red";
    error.textContent = "please fill the required field";
  } else if (regex.test(inputVal) === true) {
    inputText.style.border = "2px solid #03fc17";
    error.textContent = "";
  } else if (regex.test(inputVal) === false) {
    inputText.style.border = "2px solid red";
    error.textContent = "Only alphabets allowed";
    event.stopPropagation();
    event.preventDefault();
  }
}

export { checkValidation };
