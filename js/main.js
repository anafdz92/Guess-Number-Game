"use strict";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const result = getRandomNumber(100);
console.log(result);

let boxNumber = document.querySelector(".js-box__text");
//let boxNumberRealNumber = parseInt(boxNumberValue);
const button = document.querySelector(".js-login-button");
let message = document.querySelector(".js-message");
let counter = document.querySelector(".js-counter");
//let sum = 0 + 1;

function check(ev) {
  let inputValue = boxNumber.value;
  console.log(inputValue);

  /*
  if (boxNumberValue > 100 || boxNumberValue < 1) {
    message.innerHTML = "El número debe estar entre 1 y 100";
  } else {
    if (boxNumberValue > result) {
      message.innerHTML = "Demasiado alto";
    } else if (boxNumberValue < result) {
      message.innerHTML = "Demasiado bajo";
    } else if (boxNumberValue === result) {
      message.innerHTML = "Has ganado Campeona!";
    }
  }*/
  counter = parseInt(counter.innerHTML);
  console.log(counter);

  //counter=` counter+parseInt(1)`
}

button.addEventListener("click", check);
