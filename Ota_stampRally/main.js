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
  const userText = document.getElementById("userText");
  const userTextv = userText.value;

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
        params.append('mouseX', `${mouseX}`);
        params.append('mouseY', `${mouseY}`);
        params.append('text', `${userTextv}`);
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

