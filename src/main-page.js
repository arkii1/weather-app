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
}