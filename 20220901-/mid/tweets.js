let tw = document.querySelector("#tweets");
let html = "";
let btnHTML = "<button class = \"btn btn-dark\" onclick = \"btnTweets()\"  >ALL</button>"
let btnName = [];
let renderTweets = function (tweets){
  html += `<hr><img class="myAvatar" src="${tweets.avatar}" alt="${tweets.name}のアバター"><b>${tweets.name}</b><br> ${tweets.message}<br><i>${tweets.tweetedAt}</i>`;
}
//初回ツイート表示
tweets.forEach(renderTweets);
tw.innerHTML = html;

//ツイートフィルター
function btnTweets(filter = "ALL"){
  html ="";
  if (filter === "ALL"){
    tweets.forEach(renderTweets);
  }
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].name === filter) {
        html += `<hr><img class="myAvatar" src="${tweets[i].avatar}" alt="${tweets[i].name}のアバター"><b>${tweets[i].name}</b><br> ${tweets[i].message}<br><i>${tweets[i].tweetedAt}</i>`;
      }
    }
  tw.innerHTML = html;
}

//絞り込みボタン生成
for (let i = 0; i < tweets.length; i++) {
  if(btnName.includes(tweets[i].name)) continue;
  btnName.push(tweets[i].name);
  btnHTML += `<button class = \"btn btn-dark\" onclick = \"btnTweets('${tweets[i].name}')\">${tweets[i].name}</button>`
}
document.querySelector("#btn").innerHTML = btnHTML;


