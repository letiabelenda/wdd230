const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        }

    } catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    const desc = data.weather[0].description.toUpperCase();
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    currentTemp.innerHTML = ((`${data.main.temp}` -32) /1.8).toFixed(0);
    captionDesc.innerHTML = `<p>Description: <strong>${desc}</stron></p>`;
    temperature = currentTemp;
    
    captionDesc.innerHTML = `<h2>${desc}</h2>`;
    const icono = document.createElement('img')
    icono.setAttribute('src', iconsrc);
    icono.setAttribute('alt', desc);

    weatherIcon.appendChild(icono)
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98&units=metric&units=metric`)
.then(response => response.json())
.then(data => {

    data.list.forEach(day => {
      let date = new Date(day.dt * 1000).toLocaleDateString();
      let temperature = day.main.temp.toFixed(0);
      let description = day.weather[0].description.toUpperCase();
      let forecastIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;
      

      let forecast = document.querySelector(".forecasting")
      let fores = document.createElement("div");
      let dateForecast = document.createElement("p");
      let icons = document.createElement("img");
      let temper = document.createElement("p")
      let descr = document.createElement("p");

      
      icons.setAttribute('src', forecastIcon);
      icons.setAttribute('alt', description);
      icons.setAttribute('loading', 'lazy');
      dateForecast.textContent = date;
      temper.textContent = temperature + "°C"
      descr.textContent = description

      
      fores.appendChild(icons)
      fores.appendChild(dateForecast)      
      fores.appendChild(temper)
      fores.appendChild(descr)     
      

      forecast.appendChild(fores)

    })
  });