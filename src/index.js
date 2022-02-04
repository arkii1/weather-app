import getWeather from './handleWeatherData';

function testFunction(data) {
    console.log(data);
}

console.log('Is this working');
getWeather('London', testFunction);
