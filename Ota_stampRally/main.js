//modal control
let modalOpen = document.querySelector(".open");
let modal = document.querySelector(".input-modal");
let modalClose = document.querySelector(".close");
modalOpen.addEventListener("click",function (){modal.classList.add("open-modal")});
modalClose.addEventListener("click",function (){modal.classList.remove("open-modal")});

//global　declaration
let mouseX = 0;
let mouseY = 0;

//get mouseXY (called when photo clicked)
function getMouseXY(){
  //mouseXY -> x,y
  mouseX = event.clientX;
  mouseY = event.clientY;
  //view mouseXY
  document.querySelector("#mouseX").innerHTML = `X座標: ${mouseX} `;
  document.querySelector("#mouseY").innerHTML = `Y座標: ${mouseY} `;
}

//comment & mouseXY -> googleSpreadSheet (called when submit clicked)
function uploadGSS (){


}

