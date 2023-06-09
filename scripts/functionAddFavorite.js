let favoriteMessageList = [];

function addFavoriteMessage(event) {
  let message = event.target.parentNode.dataset.message;
  if (message) {
    let favoriteMessageListElement = document.getElementById('message-list');

    if (favoriteMessageList.includes(message)) {
      let messageContainer = document.getElementById('message-container');
      let messageText = document.getElementById('message-text');
      let closeButton = document.getElementById('close-button');

      messageText.textContent = 'Este mensaje ya existe en tu lista de favoritos, presiona aceptar para continuar descubriendo mensajes';
      messageContainer.style.display = 'block';

      closeButton.addEventListener('click', function() {
        messageContainer.style.display = 'none';
      });

      return;
    }

    let li = document.createElement('li');

    let image = document.createElement('img');
    image.src = '../img/remove.png';
    image.alt = 'icono de remove';
    image.className = 'remove';
    image.style.verticalAlign = 'middle';

    li.appendChild(image);
    li.appendChild(document.createTextNode(message));

    favoriteMessageListElement.appendChild(li);
    favoriteMessageList.push(message);

    image.addEventListener('click', function() {
      li.remove();
      favoriteMessageList = favoriteMessageList.filter(item => item !== message);
    });
  }
}

module.exports = { addFavoriteMessage };

