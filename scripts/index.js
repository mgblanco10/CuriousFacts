let favoriteMessageList = [];

function getNewMessage() {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      let currentMessage = document.getElementById('current-message');
      currentMessage.textContent = data.text;
      currentMessage.dataset.message = data.text; 

      let starImage = document.createElement('img');
      starImage.src = '../img/animateStar.png';
      starImage.alt = 'Estrella';
      starImage.className = 'favorite-star';
      starImage.style.verticalAlign = 'middle';

      let previousStarImage = document.querySelector('.favorite-star');
      if (previousStarImage) {
        previousStarImage.remove();
      }

      currentMessage.appendChild(starImage);

      starImage.addEventListener('click', addFavoriteMessage);
    })
    .catch(error => {
      console.error('Error al obtener el mensaje:', error);
    });
}

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
  }
}

document.getElementById('new-message-btn').addEventListener('click', getNewMessage);
