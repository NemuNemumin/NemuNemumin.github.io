let url ="https://morimorihoge.github.io/teu2022f/tweets.json";

fetch(url)
    .then((response) => response.json())
    .then(
        function (json) {
          console.log("ボタンを押してね");
          let answerHtml = "";
          json.forEach(function (tweet) {
            answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
          });
          document.querySelector("#answer").innerHTML = answerHtml
        }
    )

function ALL() {
  fetch(url)
      .then((response) => response.json())
      .then(
          function (json) {
            console.log("ALL");
            let answerHtml = "";
            json.forEach(function (tweet) {
              answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
            });
            document.querySelector("#answer").innerHTML = answerHtml
          }
      )
}

function sabu() {
  fetch(url)
      .then((response) => response.json())
      .then(
          function (json) {
            console.log("sabu");
            let answerHtml = "";
            if (json.name === "三郎BOT") {
              json.name.forEach(function (tweet) {
                answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
              });
              document.querySelector("#answer").innerHTML = answerHtml
            }
          }
      )
}
