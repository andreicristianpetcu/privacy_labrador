var queryParam = new URLSearchParams(window.location.search).get('q');

if (queryParam) {
    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'zcm__item';

    var googleLinkAnchor = document.createElement('a');
    googleLinkAnchor.textContent = "Google";
    googleLinkAnchor.href = "https://www.google.com/search?q=" + queryParam;
    googleLinkAnchor.className = 'zcm__link  js-zci-link  js-zci-link--images';
    googleLinkItem.appendChild(googleLinkAnchor);

    var resultItems = document.getElementById('duckbar_static');
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);
}