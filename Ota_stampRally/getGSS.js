fetch("https://script.google.com/macros/s/AKfycbz5mctsHkMlV3etE2ZSjJqDWcpPlFqIkYVt7Q8nKR1rKmDaU_N6x2WueAf5_6-Ew1mq/exec")
  .then(function (data){
    return data.json();
  })
    .then(function (json){
      const mouseX = json[0].text;
      console.log(mouseX);
    })

