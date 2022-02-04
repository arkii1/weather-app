import getWeather from './handleWeatherData';
import { initFontAwesomeScript, initPage, updateWeather } from './main-page';
import './style.css';

initFontAwesomeScript();
initPage();
getWeather('London', updateWeather);
