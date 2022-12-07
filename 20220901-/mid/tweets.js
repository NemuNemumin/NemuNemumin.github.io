let tw = document.querySelector("#tweets");
let html = "";

let renderTweets = function (tweets){
  html += "<hr>"
  html += `<img class="myAvatar" src="${tweets.avatar}" alt=""><b>${tweets.name}</b><br> ${tweets.message}<br><i>${tweets.tweetedAt}</i>`;

}
tweets.forEach(renderTweets);
html += "";
tw.innerHTML = html;

function tweetsAll() {
  html = "";
  tweets.forEach(renderTweets);
  tw.innerHTML = html;
}

function btnTweets(flag){
  html = "";
  for (let i = 0 ; i < tweets.length; i++){
    if (tweets[i].name === flag){
      html += "<hr>"
      html += `<img class="myAvatar" src="${tweets[i].avatar}" alt=""><b>${tweets[i].name}</b><br> ${tweets[i].message}<br><i>${tweets[i].tweetedAt}</i>`;
    }
  }
  tw.innerHTML = html;
}

