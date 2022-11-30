fetch("https://morimorihoge.github.io/teu2022f/tweets.json").then(
    function (response){
      return response.json();
    }
).then(
    function (json){
      let answerhtml = "";
      json.forEach(function (tweet){
        answerhtml += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerhtml;
    }
)

