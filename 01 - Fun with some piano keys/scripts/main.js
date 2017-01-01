


function removeTransition (e){
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
    console.log(e.propertyName);
}

function playSound (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll('.key');

    if(!audio) return; // Stop the function if there's no audio for pressed key

    audio.currentTime = 0; // Reset audio time to start for successive key presses
    audio.play();

    var randomColor = Math.floor((Math.random() * 1000) + 1);
    document.getElementById('content').style.backgroundColor = "#" + randomColor;

    key.classList.add('playing');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition ));
    

}
window.addEventListener('keydown', playSound);



