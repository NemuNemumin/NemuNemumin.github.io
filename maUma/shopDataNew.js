$.getJSON("menu.json")
    .done(function (json) {
        console.log(json);

        let body = ""
        // body += `<ul>`;


        $.each(json, function(index, object){
            body += `<div class="flexStart bg-white roundedShopImg my-3" id="shops">`
            body += `<p id="name" class="text-left fs-l">${object.name}</p>`
            body += `<p id="menu" class = "text-left fs-m" >${object.menu}</p>`

            body += "</div>"
            // $("#name").replaceWith(`<p id="name" class="text-left fs-l">${object.name}</p>`)
        })


        //body += `</ul>`;
        $("#tags").append(body);
        // alert(json);

    });