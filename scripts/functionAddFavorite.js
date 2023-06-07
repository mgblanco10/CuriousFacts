let favoriteMessageList = [];

function addFavoriteMessage(event) {
  let message = event.target.parentNode.dataset.message;
  if (message) {
    let favoriteMessageListElement = document.getElementById('message-list');
    let li = document.createElement('li');

    let image = document.createElement('img');
    image.src = '../img/remove.png';
    image.alt = 'icono de remove';
    image.className = 'remove';
    image.style.verticalAlign = 'middle';

    li.appendChild(image);
    li.insertAdjacentText('beforeend', message);

    favoriteMessageListElement.appendChild(li);

    image.addEventListener('click', function() {
      li.remove();
    });
  }
}