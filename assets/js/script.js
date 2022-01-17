var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 10;
var numero

function increment1() {    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;    
}

function decrement1() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment10() {    
    currentNumber = currentNumber + 10;
    currentNumberWrapper.innerHTML = currentNumber;    
}

function decrement10() {
    currentNumber = currentNumber - 10;
    currentNumberWrapper.innerHTML = currentNumber;
}

function textdec1() {
    document.getElementById("text").innerHTML = "Você retirou 1 parcela!";
}

function textdec10() {
    document.getElementById("text").innerHTML = "Você retirou 10 parcelas!";
}

function textinc1() {
    document.getElementById("text").innerHTML = "Você adicionou 1 parcela!";
}

function textinc10() {
    document.getElementById("text").innerHTML = "Você adicionou 10 parcelas!";
}