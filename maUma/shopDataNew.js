$.getJSON("menu.json")
    .done(function (json) {
        console.log(json);

        let body = ";"
        // body += `<ul>`;


        $.each(json, function(index, object){
            body += `<p id="name" class="text-left fs-l">${object.name}</p>`
            // $("#name").replaceWith(`<p id="name" class="text-left fs-l">${object.name}</p>`)
        })


        //body += `</ul>`;
        $("#tags").append(body);
        // alert(json);

    });