function doCheckAnswers(){
  let inputString = document.querySelector("#input_string").value;
  let answer = document.querySelector("#answer");
  let answerList = document.querySelectorAll("#answer-List li");
  let answerArray = Array.from(answerList);

  let message = "不正解";
  answerArray.forEach(function (li) {
    if(inputString == li.innerHTML){
      message = "正解";
    }
  }
  );
  answer.innerHTML = message;
}
