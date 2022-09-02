$.getJSON("tokyoShop.json")
    //店情報の表示始め
    .done(function (json) {
        let body = ""
        $.each(json, function (index, object) {
            body += `<div class = "col-lg-6">`
            body += `<div class = "flexStart bg-white roundedShopImg my-2 mouse zIndex10" id="shops">`
            body += `<div class="width-img">
                         <img alt="shop" class="shopImg " src="/maUma/img/shopImg/${object.img}">
                         </div>`
            body += `<div class = "mx-2 mt-n1 position-relative width-text">`
            body += `<p id="name"  class = "fs-l">${object.name}</p>`
            body += `<p id="menu"  class = "fs-m">${object.menu}</p>`
            body += `<p id="place" class = "text-right shopText  fs-s" >${object.place}</p>`
            body += `</div>`
            body += `</div>`
            body += `</div>`

        })
        let tokyoView ='<p class ="fs-l">東京競馬場 - 競馬開催日</p>'
        $("#switchView").append(tokyoView);
        $("#tags").append(body);//bodyをid=tagsの部分に追加
    });
//店情報の表示終わり


