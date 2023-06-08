let favoriteMessageList = [];

function addFavoriteMessage(event) {
  let message = event.target.parentNode.dataset.message;
  if (message) {
    let favoriteMessageListElement = document.getElementById('message-list');

    if (favoriteMessageList.includes(message)) {
      alert('El mensaje ya existe');
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

