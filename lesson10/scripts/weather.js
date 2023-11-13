// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=0a65e95b7d2094ce2cd33a12b03b9c98';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data); // Testing only4
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }  
}

apiFetch();
