const {addFavoriteMessage} = require('../scripts/functionAddFavorite');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


describe('function addFavoriteMessage', () => { 

    test('should be declared', () => {  
        expect(typeof addFavoriteMessage).toBe('function')
    });

    test('Add a valid favorite message and the test checks if the text content of the listItem is correct', () => {
      const dom = new JSDOM('<html><body><ul class="favorite-message" id="message-list"></ul></body></html>', {
        url: 'http://localhost'
      });
      global.document = dom.window.document;
  
      const parentElement = document.createElement('div');
      const targetElement = document.createElement('span');
      parentElement.appendChild(targetElement);
      targetElement.parentNode.setAttribute('data-message', 'Este es un mensaje de prueba de Mónica y Lorena');
  
      const event = {
        target: targetElement
      };

      addFavoriteMessage(event);
  
      const favoriteList = document.getElementById('message-list');
      const listItem = favoriteList.querySelector('li');

      expect(listItem.textContent).toBe('Este es un mensaje de prueba de Mónica y Lorena');
    }); 

    test('Add multiple valid favorite messages and check if the list contains the correct items', () => {
      const dom = new JSDOM('<html><body><ul class="favorite-message" id="message-list"></ul></body></html>', {
        url: 'http://localhost'
      });
      global.document = dom.window.document;
    
      const favoriteList = document.getElementById('message-list');
    
      const parentElement1 = document.createElement('div');
      const targetElement1 = document.createElement('span');
      parentElement1.appendChild(targetElement1);
      targetElement1.parentNode.setAttribute('data-message', 'Este es el primer mensaje que agrega Lorena a favoritos');
    
      const event1 = {
        target: targetElement1
      };
    
      addFavoriteMessage(event1);
    
      const parentElement2 = document.createElement('div');
      const targetElement2 = document.createElement('span');
      parentElement2.appendChild(targetElement2);
      targetElement2.parentNode.setAttribute('data-message', 'Este es el segundo mensaje que agrega Mónica a Favoritos');
    
      const event2 = {
        target: targetElement2
      };
    
      addFavoriteMessage(event2);
    
      const listItems = favoriteList.querySelectorAll('li');
    
      expect(listItems[0].textContent).toBe('Este es el primer mensaje que agrega Lorena a favoritos');
      expect(listItems[1].textContent).toBe('Este es el segundo mensaje que agrega Mónica a Favoritos');
    });

    test('Remove a favorite message', () => {
      const dom = new JSDOM('<html><body><ul class="favorite-message" id="message-list"></ul></body></html>', {
        url: 'http://localhost'
      });
      global.document = dom.window.document;
    
      const favoriteList = document.getElementById('message-list');

      const parentElement = document.createElement('div');
      const targetElement = document.createElement('span');
      parentElement.appendChild(targetElement);
      targetElement.parentNode.setAttribute('data-message', 'Este es un mensaje de prueba');
    
      const event = {
        target: targetElement
      };
    
      addFavoriteMessage(event);
    
      const listItem = favoriteList.querySelector('li');
      const removeButton = listItem.querySelector('.remove');
    
      removeButton.dispatchEvent(new dom.window.MouseEvent('click'));
    
      const updatedListItem = favoriteList.querySelector('li');
    
      expect(updatedListItem).toBeNull();
    });
})


    
    
// beforeEach(() => {
//   const dom = new JSDOM('<html><body><div id="message-list"></div></body></html>', {
//     url: 'http://localhost'
//   });
//   global.document = dom.window.document;
// });



