(function () {
    'use strict'

    describe('Tests injects Google link', function () {

        it('should work for DuckDuckGo', function () {
            document.body.innerHTML = window.__html__['test/data/duck_duck_go_result.html'];

            injectGoogleLink('duckduckgo.com', '?q=gnu+project&t=ffab&ia=qa');

            var googleAnchorInDuckDuckGoPage = document.querySelectorAll("ul#duckbar_static li a")[0];
            expect(googleAnchorInDuckDuckGoPage.text).toBe('Google');
            expect(googleAnchorInDuckDuckGoPage.href).toBe('https://www.google.com/search?q=gnu%20project');
        });


        it('should work for Qwant desktop', function () {
            document.body.innerHTML = window.__html__['test/data/qwant_desktop.html'];

            injectGoogleLink('www.qwant.com', '?q=gnu+project&t=web');

            var googleAnchorInDuckDuckGoPage = document.querySelectorAll("li.sidebar__item--google a")[0];
            expect(googleAnchorInDuckDuckGoPage.text).toBe('Google');
            expect(googleAnchorInDuckDuckGoPage.href).toBe('https://www.google.com/search?q=gnu%20project');
        });

    });
})();