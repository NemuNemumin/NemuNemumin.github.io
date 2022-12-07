let tw = document.querySelector("#tweets");
let html = "";
let renderTweets = function (tweets){
  html += "<hr>"
  html += `<img class="myAvatar" src="${tweets.avatar}" alt="${tweets.name}のアバター"><b>${tweets.name}</b><br> ${tweets.message}<br><i>${tweets.tweetedAt}</i>`;
}
tweets.forEach(renderTweets);
tw.innerHTML = html;
function btnTweets(filter = "ALL"){
  html ="";
  if (filter === "ALL"){
    tweets.forEach(renderTweets);
  }
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].name === filter) {
        html += "<hr>"
        html += `<img class="myAvatar" src="${tweets[i].avatar}" alt="${tweets[i].name}のアバター"><b>${tweets[i].name}</b><br> ${tweets[i].message}<br><i>${tweets[i].tweetedAt}</i>`;
      }
    }
  tw.innerHTML = html;
}


