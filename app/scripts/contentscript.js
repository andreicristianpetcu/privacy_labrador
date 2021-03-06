function isInsideRealBrowser(){
    return document.location.toString().indexOf('http://localhost:') === -1;
}

function getWindowLocation(){
    if(isInsideRealBrowser()){
        return window.location;
    } else {
        return window.privacyLabradorLocation.location;
    }
}

function createGoogleLink(searchTerms) {
    var googleLink = document.createElement('a');
    googleLink.textContent = "Google";
    googleLink.href = buildGoogleQueryUrl(searchTerms);
    googleLink.id='labrador_retriever_fallback';
    return googleLink;
}

function buildGoogleQueryUrl(searchTerms) {
    return "https://www.google.com/search?q=" + searchTerms;
}

function addInputFieldListener(inputToCheck) {
    linkToUpdate = document.getElementById('labrador_retriever_fallback');
    var focuWrapperAdded = inputToCheck.getAttribute('data-labrador-wrapper') === 'true';
    if (!focuWrapperAdded) {
        inputToCheck.setAttribute('data-labrador-wrapper', 'true');
        var oldOnKeyUp = inputToCheck.onkeyup;
        inputToCheck.onkeyup = function (e) {
            var oldResult = oldOnKeyUp?oldOnKeyUp(e):'';
            injectGoogleLink();
            linkToUpdate.href = buildGoogleQueryUrl(inputToCheck.value);
            console.log('new value is ' + linkToUpdate.href);
            return oldResult;
        };
    }
}

function decorageDuckDuckGoLink(googleLink) {
    googleLink.className = 'zcm__link  js-zci-link  js-zci-link--images';

    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'zcm__item';
    googleLinkItem.appendChild(googleLink);
    var resultItems = document.getElementById('duckbar_static');
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);
}

function decorateQwantLink(googleLink) {
    googleLink.className = 'sidebar__item__link';

    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'sidebar__item sidebar__item--google';
    googleLinkItem.appendChild(googleLink);
    var resultItems = document.getElementsByClassName('sidebar__content')[0];
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);

    addInputFieldListener(document.querySelector('input[type=search]'));
}

function decorateMojeekLink(googleLink) {
    googleLink.className = 'sidebar__item__link';

    var googleLinkItem = document.createElement('li');
    googleLinkItem.className = 'sidebar__item sidebar__item--google';
    googleLinkItem.appendChild(googleLink);
    var resultItems = document.querySelectorAll('.opts-bar .left ul')[0];
    resultItems.insertBefore(googleLinkItem, resultItems.childNodes[0]);

    addInputFieldListener(document.querySelector('input[type="text"]'));
}

function injectGoogleLink() {
    var hostName = getWindowLocation().hostname;
    var queryParam = new URLSearchParams(getWindowLocation().search).get('q');
    var existingLink = document.getElementById('labrador_retriever_fallback');

    if (queryParam && !existingLink) {
        var googleLink = createGoogleLink(queryParam);

        if (hostName.indexOf('duckduckgo.com') > -1) {
            decorageDuckDuckGoLink(googleLink);
        } else if (hostName.indexOf('qwant.com') > -1) {
            decorateQwantLink(googleLink);
        } else if (hostName.indexOf('mojeek.com') > -1) {
            decorateMojeekLink(googleLink);
        }
    }
}

if (isInsideRealBrowser()) {
    setTimeout(function () {
        injectGoogleLink();
    }, 500);
}