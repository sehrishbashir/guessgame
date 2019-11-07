function level1() {
    document.querySelector('.purpose1 h1').innerHTML = "Number Guess Game";
    document.querySelector('.purpose1 h3').innerHTML = "Easy Level";
    document.querySelector('.purpose1 p').innerHTML = "Choose the number from 1 to 5 and write it!";
    document.body.style.backgroundImage = "url('images/pink-sand.jpg')";
    document.querySelector('.purpose1').style = "display: inline";
    document.querySelector('main').style = "display: none";
}

let guessNumber1 = parseInt(Math.random() * 5);
let trySelf1 = 0;
function easyLevel() {
    let enterNumber1 = parseInt(document.querySelector("input").value);
    if (enterNumber1 === NaN) {
        alert("please enter the number for best result");
    } else {
        if (enterNumber1 > guessNumber1) {
            alert("too big");
            trySelf1++;
        } else if (enterNumber1 < guessNumber1) {
            alert("too small");
            trySelf1++;
        } else {
            alert("Congratulation Finally You guess after Try " + trySelf1 + " times");
            guessNumber1 = parseInt(Math.random() * 5);
            trySelf1 = 0;
        }
    }
}



function level2() {
    document.querySelector('.purpose2 h1').innerHTML = "Number Guess Game";
    document.querySelector('.purpose2 h3').innerHTML = "Medium Level";
    document.querySelector('.purpose2 p').innerHTML = "Choose the number from 1 to 10 and write it!";
    document.body.style.backgroundImage = "url('images/sea.jpg')";
    document.querySelector('.purpose2').style = "display: inline";
    document.querySelector('main').style = "display: none";
}

let guessNumber2 = parseInt(Math.random() * 10);
let trySelf2 = 0;
function mediumLevel() {
    let enterNumber2 = document.querySelector("input").value;
    trySelf2++;
    if (enterNumber2 == false) {
        alert("please enter the number for best result");
    } else {
        if (enterNumber2 > guessNumber2) {
            alert("too big");
        } else if (enterNumber2 < guessNumber2) {
            alert("too small");
        } else if (enterNumber2 == guessNumber2) {
            alert("Congratulation Finally You guess after Try " + trySelf2 + " times");
        }
    }
}



function level3() {
    document.querySelector('.purpose3 h1').innerHTML = "Number Guess Game";
    document.querySelector('.purpose3 h3').innerHTML = "Hard Level";
    document.querySelector('.purpose3 p').innerHTML = "Choose the number from 1 to 15 and write it!";
    document.body.style.backgroundImage = "url('images/night.jpg')";
    document.querySelector('.purpose3').style = "display: inline";
    document.querySelector('main').style = "display: none";
}

let guessNumber3 = parseInt(Math.random() * 15);
let trySelf3 = 0;
function hardLevel() {
    let enterNumber3 = document.querySelector("input").value;
    trySelf1++;
    if (enterNumber3 == false) {
        alert("please enter the number for best result");
    } else {
        if (enterNumber3 > guessNumber3) {
            alert("too big");
        } else if (enterNumber3 < guessNumber3) {
            alert("too small");
        } else if (enterNumber3 == guessNumber3) {
            alert("Congratulation Finally You guess after Try " + trySelf3 + " times");
        }
    }
}
