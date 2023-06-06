
let messageList = [];

function loadMessages() {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      messageList.push(data.text);
      renderMessageList();
    })
    .catch(error => {
      console.error('Error al cargar los mensajes:', error);
    });
}

function renderMessageList() {
  let messageListElement = document.getElementById('message-list');
  messageListElement.innerHTML = ''; 
  messageList.forEach(message => {
    let li = document.createElement('li');
    li.textContent = message;
    messageListElement.appendChild(li);
  });
}

function getNewMessage() {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      let currentMessage = document.getElementById('current-message');
      currentMessage.textContent = data.text;
    
      messageList.push(data.text);
      renderMessageList();
    })
    .catch(error => {
      console.error('Error al obtener el mensaje:', error);
    });
}

document.getElementById('new-message-btn').addEventListener('click', function() {
  getNewMessage();
});

loadMessages();