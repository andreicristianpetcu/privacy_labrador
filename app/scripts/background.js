let alwaysToGoogle = false;

function toGoogle(queryUrl) {
    if (queryUrl.host.indexOf("google") === -1) {
        var params = queryUrl.search.split("&");
        for (var i = 0; i < params.length; i++) {
            if (params[i].startsWith('?q=') || params[i].startsWith('q=')) {
                var newUrl = "https://www.google.com/search?q=" + params[i].split('=')[1];
                return newUrl;
            }
        }
    }
    return "";
}

chrome.commands.onCommand.addListener(function (action) {
    if (action === "to-google") {
        chrome.tabs.query({
            currentWindow: true,
            active: true,
        }, function (foundTabs) {
            var currentTabId = foundTabs[0].id;
            var currentTabUrl = foundTabs[0].url;
            const maybeGoogle = toGoogle(new URL(currentTabUrl))
            if (maybeGoogle !== "") {
                chrome.tabs.update(currentTabId, {
                    url: maybeGoogle
                });
            }
        });
    } else if (action === "toggle-always-to-google") {
        alwaysToGoogle = !alwaysToGoogle;
    }
});

function redirect_current_page_to_google(requestDetails) {
    if (alwaysToGoogle) {
        const redirectUrl = toGoogle(new URL(requestDetails.url));
        if (redirectUrl !== "") {
            return {
                redirectUrl
            };
        }
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect_current_page_to_google, {
        urls: [
            "https://duckduckgo.com/*",
            "https://www.qwant.com/*",
            "https://www.mojeek.com/*",
        ],
        types: ["main_frame"]
    }, ["blocking"]
);  