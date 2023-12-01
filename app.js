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

function hoverSound(h2Id,glitterId){
  document.getElementById(h2Id).addEventListener('mouseover',function(event) {
    let glitter = document.getElementById(glitterId);
    glitter.play();
    event.preventDefault();
  }
  )
}

hoverSound('name1','glitter');
hoverSound('name2','glitter');
hoverSound('name3','glitter');


 