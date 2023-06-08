const {addFavoriteMessage} = require('../scripts/functionAddFavorite');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('function addFavoriteMessage', () => { // funcion grande 
    test('should be declared', () => {   // funcion individual 
        expect(typeof addFavoriteMessage).toBe('function')
    });



    // test('declared parameter event', () => {
        
    //     const parentElement = document.createElement('div');
    //     const targetElement = document.createElement('li');

    //     targetElement.parentNode = parentElement;
    //     targetElement.dataset.message = 'Esto es un mensaje de prueba hecho por Mónica y Lorena';
    //     const event = {
    //         target: targetElement
    //      }

    //     addFavoriteMessage(event)
    //     const favoriteList = document.getElementById('messageList');
    //     expect(favoriteList.children.length).toBe(1);
   
    // });
    // Prueba de agregar un mensaje favorito válido
test('Agrega un mensaje favorito válido', () => {
    // Crea un entorno simulado de DOM utilizando jsdom
    const dom = new JSDOM('<html><body><div id="message-list"></div></body></html>', {
      url: 'http://localhost'
    });
    global.document = dom.window.document;
  
    // Crea los elementos necesarios para simular el escenario de prueba
    const parentElement = document.createElement('div');
    const targetElement = document.createElement('span');
    parentElement.appendChild(targetElement);
    targetElement.setAttribute('data-message', 'Este es un mensaje de prueba');
  
    // Crea el objeto de evento simulado
    const event = {
      target: targetElement
    };
  
    // Llama a la función addFavoriteMessage con el evento simulado
    addFavoriteMessage(event);
  
    // Verifica que se haya agregado el mensaje favorito correctamente
    const favoriteList = document.getElementById('message-list');
    expect(favoriteList.children.length).toBe(1);
  });
  
  
})

