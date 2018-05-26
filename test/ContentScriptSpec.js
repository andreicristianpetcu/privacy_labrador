(function () {
    'use strict';

    function setWindowLocation(url) {
        const urlFragments = url.split('?');
        window.privacyLabradorLocation = {
            location: {
                hostname: urlFragments[0],
                search: urlFragments[1]
            }
        };
    }

    function typeTextInSearchField(textToType) {
        document.querySelector('input[type=search]').value = textToType;
        document.querySelector('input[type=search]').onkeyup();
    }

    function expectLinkWithTextAndSelector(expectedText, expectedSelector = "#labrador_retriever_fallback") {
        expectedText = expectedText.split(' ').join('%20');
        var googleAnchorInDuckDuckGoPage = document.querySelectorAll(expectedSelector)[0];
        expect(googleAnchorInDuckDuckGoPage.text).toBe('Google');
        expect(googleAnchorInDuckDuckGoPage.href).toBe('https://www.google.com/search?q=' + expectedText);
    }

    describe('Tests injects Google link', function () {

        it('should work for DuckDuckGo', function () {
            document.body.innerHTML = window.__html__['test/data/duck_duck_go_result.html'];
            setWindowLocation('https://duckduckgo.com?q=gnu+project&t=ffab&ia=qa');

            injectGoogleLink();

            expectLinkWithTextAndSelector("gnu project", "ul#duckbar_static li a");
        });


        it('should work for Qwant desktop', function () {
            document.body.innerHTML = window.__html__['test/data/qwant_desktop.html'];
            setWindowLocation('https://www.qwant.com?q=gnu+project&t=web');

            injectGoogleLink();

            expectLinkWithTextAndSelector("gnu project", "li.sidebar__item--google a");
        });

        it('should work for Qwant desktop when input changes', function () {
            document.body.innerHTML = window.__html__['test/data/qwant_desktop.html'];
            setWindowLocation('https://www.qwant.com?q=gnu+project&t=web');

            injectGoogleLink();
            typeTextInSearchField('free software foundation');

            expectLinkWithTextAndSelector("free software foundation", "li.sidebar__item--google a");
        });

        // it('should work for Qwant desktop when google link gets removed', function () {
        //     document.body.innerHTML = window.__html__['test/data/qwant_desktop.html'];
        //     injectGoogleLink('www.qwant.com', '?q=gnu+project&t=web');
        //     typeTextInSearchField('free software foundation');

        //     document.getElementById("labrador_retriever_fallback").remove();
        //     typeTextInSearchField('eff');

        //     expectLinkWithTextAndSelector("eff");
        // });
    });
})();