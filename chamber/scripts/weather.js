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
    currentTemp.innerHTML = ((`${weatherData.main.temp}` -32) /1.8).toFixed(0);
    captionDesc.innerHTML = `<p>Description: <strong>${desc}</stron></p>`;
    temperature = currentTemp;
    
    captionDesc.innerHTML = `<h2>${desc}</h2>`;
    const icono = document.createElement('img')
    icono.setAttribute('src', iconsrc);
    icono.setAttribute('alt', desc);

    weatherIcon.appendChild(icono)
}