

// zipcode = 1000001

function getZipcode(){
  zipcode = document.querySelector("#input_zipcode").value;//.value忘れがち
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((response) => response.json())
      .then(
          function (json) {
            console.log(json);
            let answerHTML = "";
            if (json.status !== 200) {
              document.querySelector("#answer").innerHTML = `${json.message}`;
            } else {
              if (json.results == null) {
                document.querySelector("#answer").innerHTML = "取得できませんでした";
              } else {
                json.results.forEach(function (result) {
                  answerHTML += `${result.address1}${result.address2}${result.address3}`
                });
                document.querySelector("#answer").innerHTML = answerHTML;
              }
            }
          }
      );
}