const  { getNewMessage}= require('../scripts/functionGetNewMessage')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


describe('function addFavoriteMessage', () => { 

    test('should be declared', () => {  
        expect(typeof getNewMessage).toBe('function')
    });
 

});