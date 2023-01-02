let modalOpen = document.querySelector(".open");
let modal = document.querySelector(".input-modal");
let modalClose = document.querySelector(".close");

modalOpen.addEventListener("click",function (){modal.classList.add("open-modal")});
modalClose.addEventListener("click",function (){modal.classList.remove("open-modal")});