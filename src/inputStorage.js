const startDate = document.querySelector(".left_date");
const endDate = document.querySelector(".right_date");
const submit = document.querySelector(".weatherApp_submit");
const textInput = document.querySelector(".weather_input");

function getUserTextInput() {
  return new Promise((resolve) => {
    submit.addEventListener("click", (event) => {
      let value = textInput.value;
event.preventDefault()
      resolve(value);
    });
  });
}

async function returnUserTextInput() {
  const input = await getUserTextInput();
  console.log(`userInput ${input}`);
  return input;
}
returnUserTextInput();

function getUserStartDateInput() {
  return new Promise((resolve) => {
    submit.addEventListener("click", (event) => {
      let startDateVal = startDate.value;
event.preventDefault()
      resolve(startDateVal);
    });
  });
}

async function returnUserStartDateInput() {
  const startDateInput = await getUserStartDateInput();
  console.log(`userStartDate ${startDateInput}`);
  return startDateInput;
}
returnUserStartDateInput();

function getUserEndDateInput() {
  return new Promise((resolve) => {
    submit.addEventListener("click", (event) => {
      let endDateVal = endDate.value;
      event.preventDefault();
      resolve(endDateVal);

    });
  });
}

async function returnUserEndDateInput() {
  const endDateInput = await getUserEndDateInput();
  console.log(`userEndDate ${endDateInput}`);
  return endDateInput;
}
returnUserEndDateInput();

export {
  returnUserTextInput,
  returnUserStartDateInput,
  returnUserEndDateInput,
};
