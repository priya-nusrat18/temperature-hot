const button = document.getElementById('button');
const inputValue = document.getElementById('inputValue');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const lead = document.getElementById('lead');


 


 button.addEventListener('click', function () {
     fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a3832330cc5f28f6c6eedb00169e3d03')
 .then(res => res.json())
 .then(data => {
     const nameValue = data['name'];
     const tempValue = data['main']['temp'];
     const leadValue = data ['weather'][0]['description'];


     cityName.innerText =nameValue;
     temp.innerText=tempValue;
     lead.innerText = leadValue;
 })
 .catch( error => alert('wrong city name input'));
 })