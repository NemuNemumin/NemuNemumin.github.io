let answer = document.querySelector("#tweets");
let html = "";

let renderTweets = function (tweets){
  html += "<hr>"
  html += `<img class="myAvatar" src="${tweets.avatar}"><b>${tweets.name}</b><br> ${tweets.message}<br><i>${tweets.tweetedAt}</i>`;
}
tweets.forEach(renderTweets);
html += "";
answer.innerHTML = html;
