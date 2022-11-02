function buttonEvent(){
  document.getElementById("buttonOut").innerHTML = (`<p>押されたよ</p>`);
}

function changeRed(){
  document.getElementById("change").style.backgroundColor= "#FF0000";
}

function changeYellow(){
  document.getElementById("change").style.backgroundColor= "#FFFF00";
}

function changeGreen(){
  document.getElementById("change").style.backgroundColor= "#00FF00";
}

function appendCircle(){
  document.getElementById("circleCross").append(`〇`) ;
}

function appendCross(){
  document.getElementById("circleCross").append(`×`) ;
}

let number = 0

function plusOne(){
  number += 1;
  document.getElementById("num").innerHTML = (`${number}`) ;
}
function plusFive(){
  number += 5;
  document.getElementById("num").innerHTML = (`${number}`) ;
}
function plusTen(){
  number += 10;
  document.getElementById("num").innerHTML = (`${number}`) ;
}

function plus334(){
  number += 334;
  document.getElementById("num").innerHTML = (`${number}`) ;
}

function reset(){
  number = 0;
  document.getElementById("num").innerHTML = (`${number}`) ;
}
