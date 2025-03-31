function showWorld(world) {
  const worldDetails = document.querySelectorAll('.world-details');
  worldDetails.forEach(detail => {
    detail.style.display = 'none';
  });

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedWorld = document.getElementById(world);
  selectedWorld.style.display = 'block';

  const selectedButton = document.querySelector(`.tab-button[onclick="showWorld('${world}')"]`);
  selectedButton.classList.add('active');
}

let currentAudio = null;

function playMusic(src){
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(src);
  currentAudio.play().catch(error => {
    console.log("Erreur de lecture :", error)
  });
}

function stopMusic() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

document.getElementById("stop-music").addEventListener("click", stopMusic);
