
let carousel = document.querySelector('.carousel');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let item = document.querySelector('.item');
function test () {
   right.addEventListener('click', function () {
      carousel.scrollLeft += item.clientWidth;
   });
   left.addEventListener('click', function () {
      carousel.scrollLeft -= item.clientWidth;
   })};

   test();

export{test}