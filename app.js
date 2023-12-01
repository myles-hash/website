function addClickHandler(buttonId, audioId) {
  document.getElementById(buttonId).addEventListener('click', function(event) {
    let audio = document.getElementById(audioId);
    audio.play();
    event.preventDefault();
  });
}

addClickHandler('playSound', 'myAudio');
addClickHandler('playSound2', 'myAudio2');
addClickHandler('playSound3', 'myAudio3');

const h2Element = document.getElementsById('names');
const audioElement = document.getElementById('glitter');

  function playSound() {
    audioElement.play();
  }

  h2Element.addEventListener('mouseover', playSound);

  

 