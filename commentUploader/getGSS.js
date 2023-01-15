const mouseX = [];
const mouseY = [];
const text = [];
const viewX = [];
const viewY = [];

let body = "";

function render_comment() {

  fetch("https://script.google.com/macros/s/AKfycbz5mctsHkMlV3etE2ZSjJqDWcpPlFqIkYVt7Q8nKR1rKmDaU_N6x2WueAf5_6-Ew1mq/exec")
      .then(function (data) {
        return data.json();
      })
      .then(function (json) {
        for (let i = 0; i < json.length; i++) {
          mouseX[i] = json[i].mouseX;
          mouseY[i] = json[i].mouseY;
          text[i] = json[i].text;

          viewX[i] = mouseX[i] * window.document.getElementById("mainMap").clientWidth;
          viewY[i] = mouseY[i] * window.document.getElementById("mainMap").clientHeight;

          body += `<p class="text" style="top: ${viewY[i]}px; left:${viewX[i]}px">${text[i]}</p>`
        }
        $("#tags").append(body);
      })
}

render_comment()
// window.onresize = render_comment;

