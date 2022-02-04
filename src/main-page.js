export default function initPage() {
    const fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://kit.fontawesome.com/9f5feb954e.js';
    fontAwesomeScript.crossOrigin = 'anonymous';
    fontAwesomeScript.defer = true;
    document.head.appendChild(fontAwesomeScript);

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
