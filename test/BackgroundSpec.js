(function () {
    'use strict'

    describe('Tests background', function () {

        it('should hello world', function () {
            expect(testBackground('world')).toBe('background hello world');
        });

    });
})();