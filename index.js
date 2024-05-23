let btn = document.getElementById('btn');

btn.onclick = function () {
    let guessedNO = document.getElementById('inp').value;
    guessedNO = Number(guessedNO);
    let min = 1;
    let max = 100;
    const guess = Math.floor(Math.random() * (max - min) + 1);
    let counter = 1;
    if(isNaN(guess)) {
        alert('enter a valid number');
    }
    else if(guessedNO > max || guessedNO < min) {
        alert('enter a valid number');
    }
    else {
        counter++;
        if(guessedNO > guess) {
            alert('too high!enter a lower number');
        }
        else if(guessedNO < guess) {
            alert('too low!enter a higher number');
        }
        else {
            alert(`you got the correct number in ${counter } attempts`);
        }
    }
}
