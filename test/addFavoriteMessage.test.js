const {addFavoriteMessage} = require('../scripts/functionAddFavorite')

describe('function addFavoriteMessage', () => { // funcion grande 
    test('should be declared', () => {   // funcion individual 
        expect(typeof addFavoriteMessage).toBe('function')
    })


    test('declared parameter event', () => {
        
        const parentElement = document.createElement('div');
        const targetElement = document.createElement('li');

        targetElement.parentNode = parentElement;
        targetElement.dataset.message = 'Esto es un mensaje de prueba hecho por Mónica y Lorena';
        const event = {
            target: targetElement
         }

        addFavoriteMessage(event)
        const favoriteList = document.getElementById('messageList');
        expect(favoriteList.children.length).toBe(1);
   
    })
})

