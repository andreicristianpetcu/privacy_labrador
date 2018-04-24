function createGoogleLink(searchTerms) {
    var googleLink = document.createElement('a');
    googleLink.textContent = "Google";
    googleLink.href = "https://www.google.com/search?q=" + searchTerms;
    return googleLink;
}

function decorageDuckDuckGoLink(googleLink){
    googleLink.className = 'zcm__link  js-zci-link  js-zci-link--images';

    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'zcm__item';
    googleLinkItem.appendChild(googleLink);
    var resultItems = document.getElementById('duckbar_static');
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);
}

function decorateQwantLink(googleLink){
    googleLink.className = 'sidebar__item__link';

    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'sidebar__item sidebar__item--google';
    googleLinkItem.appendChild(googleLink);
    var resultItems = document.getElementsByClassName('sidebar__content')[0];
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);
}

function injectGoogleLink(hostName, locationSearch) {
    var queryParam = new URLSearchParams(locationSearch).get('q');

    if (queryParam) {
        var googleLink = createGoogleLink(queryParam);

        if(hostName.indexOf('duckduckgo.com') > -1){
            decorageDuckDuckGoLink(googleLink);
        } else if(hostName.indexOf('qwant.com') > -1){
            decorateQwantLink(googleLink);
        }

    }
}

setTimeout(function(){
    injectGoogleLink(window.location.hostname, window.location.search);
}, 500);
