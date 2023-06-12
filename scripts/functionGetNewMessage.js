// const { addFavoriteMessage } = require('./functionAddFavorite');
function getNewMessage() {
  // const apiUrl = window.config.apiUrl;
  // fetch(apiUrl)
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      let currentMessage = document.getElementById('current-message');
      if (!currentMessage) {
        console.error('El elemento "current-message" no se encontró en el DOM');
        return;
      }

      currentMessage.textContent = data.text;
      currentMessage.dataset.message = data.text;

      let starImage = document.createElement('img');
      starImage.src = '../img/animateStar.png';
      starImage.alt = 'Estrella que al presionar agrega a la lista de favoritos';
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

module.exports = { getNewMessage };



