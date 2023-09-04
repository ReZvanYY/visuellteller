let numberDiv = document.getElementById('number');
let numberResult = 0;

function setNumber(){
    numberResult = 0;
    numberDiv.innerHTML = numberResult;
}

function minusOne() {
    numberResult--;
    numberDiv.innerHTML = numberResult;
}
function plussOne() {
    numberResult++;
    numberDiv.innerHTML = numberResult;
}
