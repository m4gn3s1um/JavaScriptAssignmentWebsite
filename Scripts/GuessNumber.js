var x;

function generateGuess(){
    var inputGuess = document.getElementById("numberGuess").value;
    var displayLabel = document.getElementById("numberLabel");

    if(x > inputGuess){
        displayLabel.innerHTML = 'Number was too low';
    } else if(x < inputGuess){
        displayLabel.innerHTML = 'Number was too high';
    } else if(x == inputGuess){
        displayLabel.innerHTML = 'You are right!'
        generateNumber();
    }


}

function generateNumber(){

    min = Math.ceil(0);
    max = Math.floor(100);


    x = Math.floor(Math.random() * (max + min) + min);
}