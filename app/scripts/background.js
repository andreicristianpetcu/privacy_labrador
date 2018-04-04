chrome.commands.onCommand.addListener(function (action) {
    if (action == "to-google") {
        chrome.tabs.query({
            currentWindow: true,
            active: true,
        }, function (foundTabs) {
            var currentTabId = foundTabs[0].id;
            var currentTabUrl = foundTabs[0].url;

            var url = new URL(currentTabUrl);
            var params = url.search.split("&");
            for (var i = 0; i < params.length; i++) {
                if (params[i].startsWith('?q=') || params[i].startsWith('q=')) {
                    var newUrl = "https://www.google.com/search?q=" + params[i].split('=')[1];
                    chrome.tabs.update(currentTabId, {
                        url: newUrl
                    });
                }
            }
        });
    }
});