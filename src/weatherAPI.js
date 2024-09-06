

const baseURL ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?key=NTV85PXGEFFBCHC42DLFKNLY6'

const location = localStorage.getItem('textInput');
const date1 = localStorage.getItem('date1'); 
const date2 =localStorage.getItem('date2');
console.log(location);

function concatInput(){
 const inputStr= location.concat(date1,date2);
console.log(inputStr);
 return inputStr;
}
;

function editInput(){
    const inputStr = concatInput();
    console.log(inputStr);
    const arrUrl=baseURL.split('');
    console.log(arrUrl);
   const protoFinalURL = arrUrl.splice(84,110,inputStr);
   console.log(`proto->${protoFinalURL}`);  
   console.log(`arrURL->${arrUrl}`);
   const finalArr =arrUrl.concat(protoFinalURL);
   const finalURL=finalArr.join('')
    return finalURL;
}


function fetchVisualApi (){
    return new Promise ((resolve)=>{
        const finalURL=editInput();
        const promise= fetch(finalURL,{mode:'cors'});
        resolve(promise);
    })
    
}

async function processVisualApi (){
    const promise = await fetchVisualApi();
    const fulfilledPromise = promise.json();
console.log(fulfilledPromise);

}   



const fulfilledPromise = processVisualApi(); 




export{fulfilledPromise};