// Expose for now
const weatherId = '2645d0625b71eb9c2a11a1cf94cd794a';

export default async function getWeather(location) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${weatherId}`;
        const promise = await fetch(url);
        const data = await promise.json();
        return data;
    } catch (err) {
        console.log(`ERROR: ${err}`);
        return null;
    }
}