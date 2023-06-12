function getNewMessage() {
  const apiUrl = window.config.apiUrl;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let currentMessage = document.getElementById('current-message');
      currentMessage.textContent = data.text;
      currentMessage.dataset.message = data.text; 

      let starImage = document.createElement('img');
      starImage.src = '../img/animateStar.png';
      starImage.alt = 'Estrella que al presionar agrega a la lista de favoritos';
      starImage.className = 'favorite-star';
      starImage.style.verticalAlign = 'middle';
      // console.log(starImage);
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


module.exports={getNewMessage}
