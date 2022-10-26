function buttonEvent(){
  document.getElementById("buttonOut").innerHTML = (`<p>押されたよ</p>`);
}

function colorEvent(){
  document.getElementById("buttonColor").style.backgroundColor= "#2B96FA";
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