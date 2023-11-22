const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
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
    currentTemp.innerHTML = `<p>Current Temperature: <strong>${data.main.temp.toFixed(0)} °F</stron></p>`;
    captionDesc.innerHTML = `<p>Description: <strong>${desc}</stron></p>`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}
