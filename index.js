
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.pulsa');
    const nameInput = document.querySelector('.name');
  
    playButton.addEventListener('click', function() {
      if (playButton.textContent === 'Empezar') {
        nameInput.style.visibility = 'visible';
        nameInput.style.opacity = '1';
        playButton.textContent = '¡Jugar!';
        playButton.classList.add('inactive');
      }
    });
  
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim().length > 0) {
        playButton.classList.remove('inactive');
        playButton.classList.add('active');
      } else {
        playButton.classList.remove('active');
        playButton.classList.add('inactive');
      }
    });
  
    function startGame() {
      const playerName = nameInput.value.trim();
      localStorage.setItem('playerName', playerName);
      window.location.href = 'juego.html'; // URL página juego
    }
  
    playButton.addEventListener('click', function() {
      if (playButton.textContent === '¡Jugar!' && playButton.classList.contains('active')) {
        startGame();
      }
    });
  
    nameInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && nameInput.value.trim().length > 0) {
        startGame();
      }
    });
  });

