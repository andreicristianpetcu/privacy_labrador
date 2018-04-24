(function () {
    'use strict'

    describe('Tests injects Google link', function () {

        it('should work for DuckDuckGo', function () {
            document.body.innerHTML = window.__html__['test/data/duck_duck_go_result.html'];

            injectGoogleLink('?q=karma+load+file&t=ffab&ia=qa');

            var googleAnchorInDuckDuckGoPage = document.querySelectorAll("ul#duckbar_static li a")[0];
            expect(googleAnchorInDuckDuckGoPage.text).toBe('Google');
            expect(googleAnchorInDuckDuckGoPage.href).toBe('https://www.google.com/search?q=karma%20load%20file');
        });

    });
})();