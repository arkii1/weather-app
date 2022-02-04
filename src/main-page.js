function initHeader() {
    const textContainer = document.createElement('div');
    textContainer.classList.add('txt-container');

    const head1Txt = document.createElement('span');
    head1Txt.classList.add('head1');
    head1Txt.innerHTML = 'Search for weather';
    textContainer.appendChild(head1Txt);

    const head2Txt = document.createElement('span');
    head2Txt.classList.add('head2');
    head2Txt.innerHTML = 'Tommy Mapp';
    textContainer.appendChild(head2Txt);

    document.body.appendChild(textContainer);
}

function initSearchBar() {
    const searchBarBox = document.createElement('div');
    searchBarBox.classList.add('search-box');

    const inputText = document.createElement('input');
    inputText.classList.add('search-txt');
    inputText.placeholder = 'E.g. London';
    inputText.type = 'text';
    searchBarBox.appendChild(inputText);

    const searchBtn = document.createElement('a');
    searchBtn.classList.add('search-btn');
    searchBtn.href = '#';
    searchBarBox.appendChild(searchBtn);

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-search');
    searchBtn.appendChild(icon);

    document.body.appendChild(searchBarBox);
}

function initWeatherResults() {
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.dataset.results = 'temp';
    resultsContainer.appendChild(temp);

    const humidity = document.createElement('span');
    humidity.classList.add('humidity');
    humidity.dataset.results = 'humidity';
    resultsContainer.appendChild(humidity);

    const description = document.createElement('span');
    description.classList.add('description');
    description.dataset.results = 'description';
    resultsContainer.appendChild(description);

    document.body.appendChild(resultsContainer);
}

export function initFontAwesomeScript() {
    const fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://kit.fontawesome.com/9f5feb954e.js';
    fontAwesomeScript.crossOrigin = 'anonymous';
    fontAwesomeScript.defer = true;
    document.head.appendChild(fontAwesomeScript);
}

export function initPage() {
    initHeader();
    initSearchBar();
    initWeatherResults();
}

export function updateWeather(data) {
    const tempElement = document.querySelector('[data-results="temp"]');
    tempElement.innerHTML = `Temperature: ${data.main.temp}`;
    const humidElement = document.querySelector('[data-results="humidity"]');
    humidElement.innerHTML = `Humidity: ${data.main.humidity}`;
    const descripElement = document.querySelector('[data-results="description"]');
    descripElement.innerHTML = `Description: ${data.weather[0].description}`;
}