

// zipcode = 1000001

function bookAPI(){
  searchWords = document.querySelector("#input_searchWords").value;//.value忘れがち
  fetch(`https://app.rakuten.co.jp/services/api/BooksCD/Search/20170404?[title]=[${searchWords}]`)
      .then((response) => response.json())
      .then(
          function (json) {
            console.log(json);
            // document.querySelector("#answer").innerHTML = ;
          }
      );
}