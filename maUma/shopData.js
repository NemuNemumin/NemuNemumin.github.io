var data
$.getJSON("menu.json")
    .done(function (json) {
        alert(data.name);

    });