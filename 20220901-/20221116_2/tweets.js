let answer = document.querySelector("#answer");
let html = "<ul>";

/*
let i = 0;
while (i < tweets.length){
  html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  i++;
}
html += "</ul>";

answer.innerHTML = html;
*/

let renderTweets = function (tweets){
  html += `<li><b>${tweets.name}</b>: ${tweets.message} <i>${tweets.tweetedAt}</i></li>`;
}
tweets.forEach(renderTweets);
html += "</ul>";
answer.innerHTML = html;
