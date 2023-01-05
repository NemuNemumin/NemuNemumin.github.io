//modal control
let modalOpen = document.querySelector(".open");
let modal = document.querySelector(".input-modal");
let modalClose = document.querySelector(".close");
modalOpen.addEventListener("click",function (){modal.classList.add("open-modal")});
modalClose.addEventListener("click",function (){modal.classList.remove("open-modal")});

//get mouseXY
function getMouseXY(){
  //mouseXY -> x,y
  var x = event.clientX;
  var y = event.clientY;

  document.querySelector("#mouseX").innerHTML = `X座標: ${x} `;
  document.querySelector("#mouseY").innerHTML = `Y座標: ${y} `;
}
