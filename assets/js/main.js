const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equal = document.querySelector(".equal");
const resultScreen = document.querySelector("#result-screen span");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const del = document.querySelector(".del");

zero.onclick = () => resultScreen.innerHTML += "0";
one.onclick = () => resultScreen.innerHTML += "1";
two.onclick = () => resultScreen.innerHTML += "2";
three.onclick = () => resultScreen.innerHTML += "3";
four.onclick = () => resultScreen.innerHTML += "4";
five.onclick = () => resultScreen.innerHTML += "5";
six.onclick = () => resultScreen.innerHTML += "6";
seven.onclick = () => resultScreen.innerHTML += "7";
eight.onclick = () => resultScreen.innerHTML += "8";
nine.onclick = () => resultScreen.innerHTML += "9";
dot.onclick = () => resultScreen.innerHTML += ".";
addition.onclick = () => resultScreen.innerHTML += "+";
subtraction.onclick = () => resultScreen.innerHTML += "-";
multiplication.onclick = () => resultScreen.innerHTML += "*";
division.onclick = () => resultScreen.innerHTML += "/";
equal.onclick = () => resultScreen.innerHTML = eval(resultScreen.innerHTML);
clear.onclick = () => resultScreen.innerHTML = "";
del.onclick = () => resultScreen.innerHTML = resultScreen.innerHTML.toString().slice(0,-1);
document.body.onkeyup = e => {
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" ||
        e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9" ||
        e.key == "0" || e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key == ".") {
        resultScreen.innerHTML += e.key;
    }else if(e.key == "=" || e.key == "Enter"){
        resultScreen.innerHTML = eval(resultScreen.innerHTML);
    }else if(e.key == "Backspace"){
        resultScreen.innerHTML = resultScreen.innerHTML.toString().slice(0,-1);
    }else if(e.key == "c"){
        resultScreen.innerHTML = "";
    }
}