(function () {
    'use strict'

    describe('Tests background toGoogle', function () {

        it('should redirect ddg to google', function () {
            expect(toGoogle(new URL('https://duckduckgo.com/?q=test'))).toBe('https://www.google.com/search?q=test');
        });

        it('should redirect qwant to google', function () {
            expect(toGoogle(new URL('https://www.qwant.com/?q=test'))).toBe('https://www.google.com/search?q=test');
        });

        it('should redirect mojeek to google', function () {
            expect(toGoogle(new URL('https://www.mojeek.com/search?q=firefox%20fenix'))).toBe('https://www.google.com/search?q=firefox%20fenix');
        });

        it('should not redirect google to google', function () {
            expect(toGoogle(new URL('https://www.google.com/search?q=test'))).toBe('');
        });
    });
})();