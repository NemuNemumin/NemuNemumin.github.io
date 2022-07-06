$.getJSON("menu.json")
    .done(function (json) {
        console.log(json);
        let body = ";"
        body += `<ul>`;
        $.each(json, function(index, object){
            body += `<li>${object.name}</li>`;
            console.log(object.name);
            console.log(JSON.stringify(object));
        })
        body += `</ul>`;
        $("#shops").append(body);
        // alert(json);

    });