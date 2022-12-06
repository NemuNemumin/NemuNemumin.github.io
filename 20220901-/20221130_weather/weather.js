fetch("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json")
    .then((response) => response.json())
      .then(
        function (json) {
          console.log(json.targetArea);
          document.querySelector("#publishingOffice").innerHTML = "データ提供元:" + json.publishingOffice;
          document.querySelector("#area").innerHTML = "地域:" + json.targetArea;
          document.querySelector("#text").innerHTML = "詳細:" + json.text;
        }
    );