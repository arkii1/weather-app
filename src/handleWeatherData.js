const weatherId = '2645d0625b71eb9c2a11a1cf94cd794a';

export default async function getWeather(location, callback) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${weatherId}&units=metric`;
        const promise = await fetch(url, {
            mode: 'cors',
        });
        const data = await promise.json();
        callback(data);
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}
