//modal control
let modalOpen = document.querySelector(".open");
let modal = document.querySelector(".input-modal");
let modalClose = document.querySelector(".close");
// photo click -> add open-modal CSS
modalOpen.addEventListener("click",function (){modal.classList.add("open-modal")});
// close click -> remove open-modal CSS
modalClose.addEventListener("click",function (){modal.classList.remove("open-modal")});

//global　declaration
let windowMouseX = 0;
let windowMouseY = 0;
let viewMouseX   = 0;
let viewMouseY   = 0;
let photoWidth = 0;
let photoHeight = 0;

//get mouseXY (called when photo clicked)
function getMouseXY(){
  //mouseXY -> x,y
  windowMouseX = event.clientX;
  windowMouseY = event.clientY;

  photoWidth  = window.document.getElementById("mainMap").clientWidth;
  photoHeight = window.document.getElementById("mainMap").clientHeight;

  viewMouseX = windowMouseX / photoWidth;
  viewMouseY = windowMouseY / photoHeight;

  //view mouseXY
  document.querySelector("#mouseX").innerHTML = `X座標: ${windowMouseX} `;
  document.querySelector("#mouseY").innerHTML = `Y座標: ${windowMouseY} `;
}

//comment & mouseXY -> googleSpreadSheet (called when submit clicked)
function uploadGSS (){
  const userText = document.getElementById("userText");
  const userTextValue = userText.value;

  new Vue({
    el: '#vue',
    data: {
    },
    created: function(){
      this.postData();
    },
    methods: {
      postData: function(){
        var params = new URLSearchParams();
        params.append('mouseX', `${viewMouseX}`);
        params.append('mouseY', `${viewMouseY}`);
        params.append('text', `${userTextValue}`);
        axios.post('https://script.google.com/macros/s/AKfycbwXe4AUH0aF0vi4e8TdwVx1uEdC2ezcI2cyn95TL0OhEhjMaFL-gfJLaTTSKeKEk_ed/exec', params)
          .then( ( res ) => {
            console.log(res.data);
          } )
          .catch( ( res ) => {
            console.error( res );
          });
      }
    }
  });
  modal.classList.remove("open-modal");
  userText.value = "";
}
