$.getJSON("menu1.json")
    //店情報の表示
    .done(function (json) {
        console.log(json);
        let body = ""
        $.each(json, function (index, object) {
            body += `<div class = "flexStart bg-white roundedShopImg my-3" id="shops">`

            body += `<div class="shopImgBox">
                        <img alt="shop" class="shopImg" src="/maUma/sampleImg/${object.img}">
                     </div>`
            body += `<div class = "mx-2 mt-n1 position-relative" >`
            body += `<p id="name" class="text-left fs-l">${object.name}</p>`
            body += `<p id="menu" class = "text-left fs-m" >${object.menu}</p>`
            body += `<p id="place" class = "shopText fs-m">${object.place}</p>`
            body += `</div>`
            body += `</div>`
        })
        $("#tags").append(body);
    });