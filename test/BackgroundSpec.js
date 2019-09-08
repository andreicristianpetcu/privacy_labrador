(function () {
    'use strict'

    describe('Tests background', function () {

        it('should hello world', function () {
            expect(toGoogle(new URL('https://duckduckgo.com/?q=test&t=h_&ia=web'))).toBe('https://www.google.com/search?q=test');
        });

    });
})();