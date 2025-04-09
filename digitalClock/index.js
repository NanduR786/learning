const clock = document.querySelector('#clock');

const date = new Date();

setInterval(function(){
  clock.innerHTML = date.toLocaleTimeString()
},1000)