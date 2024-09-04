const startDate = document.querySelector(".left_date");
const endDate = document.querySelector(".right_date");
const submit = document.querySelector(".weatherApp_submit");
const textInput = document.querySelector(".weather_input");
const toggle = document.querySelector('.toggle-label');
const toggleInput = document.querySelector('.toggle-input')
console.log(toggle);



const inputVal = submit.addEventListener("click", (event) => {
  let value = textInput.value;
  localStorage.setItem("inputVal", value);
  event.preventDefault();
});

const startDateStore = submit.addEventListener("click", (event) => {
  let startDateVal = startDate.value;
  
  localStorage.setItem("startDate", startDateVal);

  event.preventDefault();
});
const endDateStore = submit.addEventListener("click", (event) => {
  let endDateVal = endDate.value;

  localStorage.setItem("end", endDateVal);
  event.preventDefault();
});

const toggleValStore = submit.addEventListener('click',(event)=>{
     event.preventDefault()
     if (toggleInput.checked){
          let toggleVal=toggleInput.nextElementSibling.getAttribute('data-on');
          console.log(toggleVal);
          localStorage.setItem('toggleval',toggleVal);
          
          
     }else{
          let toggleVal=toggleInput.nextElementSibling.getAttribute('data-off');
          console.log(toggleVal);
          localStorage.setItem('toggleval',toggleVal);
             
     }
     
})


export { startDateStore, endDateStore, inputVal,toggleValStore };
