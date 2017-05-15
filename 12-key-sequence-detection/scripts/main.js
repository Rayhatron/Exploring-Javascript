const secretCode = 'rayhatron';
const secretCodeLength = secretCode.length;

let enteredCode = [];

window.addEventListener('keyup', (e) => {
    
    enteredCode.push(e.key.toLowerCase());

    enteredCode.splice(-secretCodeLength -1, enteredCode.length - secretCodeLength);

    if(enteredCode.join('').includes(secretCode)){
        alert('Something cool is coming soon!')
    }
});