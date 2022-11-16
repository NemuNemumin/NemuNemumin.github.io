let answer = document.querySelector("#answer")

let HTML = "<ul>";
let i = 0;
while(i < fruitNames.length){
  HTML += `<li>${fruitNames[i]}</li>`;
  i++
  HTML += "</li>";
}
answer.innerHTML = HTML;

