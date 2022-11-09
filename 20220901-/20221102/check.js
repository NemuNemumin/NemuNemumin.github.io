function checkUserInput() {
  let userInput = String(document.querySelector("#user_input").value);
  if (userInput == "あいうえお") {
    window.alert("〇");
  } else {
    window.alert("✕");
  }
}

function checkAge() {
  let element = document.querySelector("#answer");
  let userAge = Number(document.querySelector("#age").value);
  let message
  if (userAge < 0) {
    message = "エラー";
  } else if (userAge < 20) {
    message = "未成年";
  } else if (20 <= userAge && userAge < 65) {
    message = "成年";
  } else {
    message = "高齢者";
  }

  element.innerHTML = message;
}


function checkYear() {
  let element = document.querySelector("#yearAnswer");
  let userYear = Number(document.querySelector("#year").value);
  if (userYear % 4 == 0) {
    if (userYear % 100 == 0) {
      element.innerHTML = "平年";
      if (userYear % 400 == 0) {
        element.innerHTML = "閏年";
      } else {
        element.innerHTML = "平年";
      }
    } else {
      element.innerHTML = "閏年";
    }
  } else {
    element.innerHTML = "平年";
  }

}