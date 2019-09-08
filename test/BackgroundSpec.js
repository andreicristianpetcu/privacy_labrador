(function () {
    'use strict'

    describe('Tests background', function () {

        it('should redirect ddg to google', function () {
            expect(toGoogle(new URL('https://duckduckgo.com/?q=test&t=h_&ia=web'))).toBe('https://www.google.com/search?q=test');
        });

        it('should not redirect google to google', function () {
            expect(toGoogle(new URL('https://www.google.com/search?q=test'))).toBe('');
        });
    });
})();