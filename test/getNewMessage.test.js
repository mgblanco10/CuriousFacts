const  { getNewMessage}= require('../scripts/functionGetNewMessage')
const { JSDOM } = require('jsdom');

const html = `
  <html>
    <body>
      <section class="section">
        <h2 class="class-title random">Curiosidades aleatorias</h2>
        <p class="message-random curious-facts" id="current-message"></p>
        <button id="new-message-btn" class="init-btn press" onclick="getNewMessage()">PRESIONAR</button>
        <div id="message-container" style="display: none;">
          <span id="message-text"></span>
          <button id="close-button">ACEPTAR</button>
        </div>
      </section>
      <section class="favorites">
        <h2 class="class-title">Curiosidades favoritas</h2>
        <ul class="favorite-message" id="message-list"></ul>
      </section>
    </body>
  </html>
`;

describe('getNewMessage', () => {
  let window;
  let document;

  beforeEach(() => {
    const dom = new JSDOM(html);
    window = dom.window;
    document = window.document;
    global.window = window;
    global.document = document;
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
  });

  test('Obtener nuevo mensaje', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ text: 'Mensaje de prueba' }),
      })
    );

    getNewMessage();

    await new Promise(resolve => setTimeout(resolve, 500));

    const currentMessage = document.getElementById('current-message');
    expect(currentMessage.textContent).toBe('Mensaje de prueba');
  });
  
  test('should be declared', () => {  
        expect(typeof getNewMessage).toBe('function')
    });

});











