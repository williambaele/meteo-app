console.log("Hi")
const url = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
let request = new XMLHttpRequest();
let btnchange = document.querySelector("#change");
let city = "Bangkok"
let labelcity = document.querySelector('#city')
let labeltemperature = document.querySelector('#temperature')
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function() {
  if (request.readyState === XMLHttpRequest.DONE){
    if (request.status === 200){
      let answer = request.response
      let temperature = answer.main.temp;
      let city = answer.name;
      labeltemperature.textContent = temperature;
      labelcity.textContent = city;
      console.log(city);
      console.log(temperature);
    }
    else {
      console.log('Issue with the API');
    }
  }
}

changeLocation() {
  
}
