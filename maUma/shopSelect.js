let bodyTokyo = '';
let bodyPw = '';
let bodySummer = '';
$.getJSON("tokyoShop.json")
    //店情報の表示始め
    .done(function (json) {
        $.each(json, function (index, object) {
            bodyTokyo += `<div class = "col-lg-6">`
            bodyTokyo += `<div class = "flexStart bg-white roundedShopImg my-2 mouse zIndex10" id="shops">`
            bodyTokyo += `<div class="width-img">
                         <img alt="shop" class="shopImg " src="/maUma/img/shopImg/${object.img}">
                         </div>`
            bodyTokyo += `<div class = "mx-2 mt-n1 position-relative width-text">`
            bodyTokyo += `<p id="name"  class = "fs-l">${object.name}</p>`
            bodyTokyo += `<p id="menu"  class = "fs-m">${object.menu}</p>`
            bodyTokyo += `<p id="place" class = "text-right shopText  fs-s" >${object.place}</p>`
            bodyTokyo += `</div>`
            bodyTokyo += `</div>`
            bodyTokyo += `</div>`

        })
    });
//店情報の表示終わり

$.getJSON("shop_pw.json")
    //店情報の表示始め
    .done(function (json) {
        $.each(json, function (index, object) {
            bodyPw += `<div class = "col-lg-6">`
            bodyPw += `<div class = "flexStart bg-white roundedShopImg my-2 mouse zIndex10" id="shops">`
            bodyPw += `<div class="width-img">
                         <img alt="shop" class="shopImg " src="/maUma/img/shopImg/${object.img}">
                         </div>`
            bodyPw += `<div class = "mx-2 mt-n1 position-relative width-text">`
            bodyPw += `<p id="name"  class = "fs-l">${object.name}</p>`
            bodyPw += `<p id="menu"  class = "fs-m">${object.menu}</p>`
            bodyPw += `<p id="place" class = "text-right shopText  fs-s" >${object.place}</p>`
            bodyPw += `</div>`
            bodyPw += `</div>`
            bodyPw += `</div>`

        })
    });
//店情報の表示終わり

$.getJSON("shop_summer.json")
    //店情報の表示始め
    .done(function (json) {
        $.each(json, function (index, object) {
            bodySummer += `<div class = "col-lg-6">`
            bodySummer += `<div class = "flexStart bg-white roundedShopImg my-2 mouse zIndex10" id="shops">`
            bodySummer += `<div class="width-img">
                         <img alt="shop" class="shopImg " src="/maUma/img/shopImg/${object.img}">
                         </div>`
            bodySummer += `<div class = "mx-2 mt-n1 position-relative width-text">`
            bodySummer += `<p id="name"  class = "fs-l">${object.name}</p>`
            bodySummer += `<p id="menu"  class = "fs-m">${object.menu}</p>`
            bodySummer += `<p id="place" class = "text-right shopText  fs-s" >${object.place}</p>`
            bodySummer += `</div>`
            bodySummer += `</div>`
            bodySummer += `</div>`

        })
    });
//店情報の表示終わり

$(document).on("click", "#tokyo", function () {//開催日ボタンが押されたときに走る

    $("#tags").html(bodyTokyo);

    let tokyoView ='<p class ="fs-l">東京競馬場 - 競馬開催日</p>'
    $("#switchView").html(tokyoView);

});

$(document).on("click", "#pw", function () {//パークウインズボタンが押されたときに走る

    $("#tags").html(bodyPw);

    let pwView ='<p class ="fs-l">東京競馬場 - パークウインズ</p>'
    $("#switchView").html(pwView);

});

$(document).on("click", "#summer", function () {//夏競馬ボタンが押されたときに走る

    $("#tags").html(bodySummer);

    let SummerView ='<p class ="fs-l">東京競馬場 - 夏競馬期間</p>'
    $("#switchView").html(SummerView);

});