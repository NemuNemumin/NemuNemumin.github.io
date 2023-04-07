document.open();
/*横スクロールがドラッグでも動くようになるコードです*/
(function(){
  $.fn.dragScroll = function(){
    let target = this;
    $(this).mousedown(function (event){
      $(this)
          .data('down', true)
          .data('x', event.clientX)
          .data('y', event.clientY)
          .data('scrollLeft', this.scrollLeft)
          .data('scrollTop', this.scrollTop);
      return false;
    }).css({
      'cursor': 'auto'
    });
    // マウスカーソルがウィンドウから外れてもイベント実行
    $(document).mousemove(function (event){
      if ($(target).data('down') == true){
        // スクロール
        target.scrollLeft($(target).data('scrollLeft') + $(target).data('x') - event.clientX);
        target.scrollTop($(target).data('scrollTop') + $(target).data('y') - event.clientY);
        return false; // 文字列選択を抑止
      }
    }).mouseup(function (event){
      $(target).data('down', false);
    });
    return this;
  }
})(jQuery);
$(document).ready(function () {$('#calender-btn').dragScroll();});//適用するクラスやIDを入力してください
document.close();

function isDisplayCalendar03(){
  document.getElementById("sbh4").style.display = "none";
  document.getElementById("sbh5").style.display = "none";
  document.getElementById("sbh6").style.display = "none";
  document.getElementById("sbh7").style.display = "none";
  document.getElementById("sbh3").style.display = "block";

  document.getElementById("3rd").style.color = "#FFFFFF";
  document.getElementById("3rd").style.backgroundColor = "#2D4B70";
  document.getElementById("4th").style.color = "";
  document.getElementById("4th").style.backgroundColor = "";
  document.getElementById("5th").style.color = "";
  document.getElementById("5th").style.backgroundColor = "";
  document.getElementById("6th").style.color = "";
  document.getElementById("6th").style.backgroundColor = "";
  document.getElementById("7th").style.color = "";
  document.getElementById("7th").style.backgroundColor = "";
}
function isDisplayCalendar04(){
  document.getElementById("sbh3").style.display = "none";
  document.getElementById("sbh5").style.display = "none";
  document.getElementById("sbh6").style.display = "none";
  document.getElementById("sbh7").style.display = "none";
  document.getElementById("sbh4").style.display = "block";

  document.getElementById("4th").style.color = "#FFFFFF";
  document.getElementById("4th").style.backgroundColor = "#2D4B70";
  document.getElementById("3rd").style.color = "";
  document.getElementById("3rd").style.backgroundColor = "";
  document.getElementById("5th").style.color = "";
  document.getElementById("5th").style.backgroundColor = "";
  document.getElementById("6th").style.color = "";
  document.getElementById("6th").style.backgroundColor = "";
  document.getElementById("7th").style.color = "";
  document.getElementById("7rd").style.backgroundColor = "";
}
function isDisplayCalendar05(){
  document.getElementById("sbh3").style.display = "none";
  document.getElementById("sbh4").style.display = "none";
  document.getElementById("sbh6").style.display = "none";
  document.getElementById("sbh7").style.display = "none";
  document.getElementById("sbh5").style.display = "block";

  document.getElementById("5th").style.color = "#FFFFFF";
  document.getElementById("5th").style.backgroundColor = "#2D4B70";
  document.getElementById("3rd").style.color = "";
  document.getElementById("3rd").style.backgroundColor = "";
  document.getElementById("4th").style.color = "";
  document.getElementById("4th").style.backgroundColor = "";
  document.getElementById("6th").style.color = "";
  document.getElementById("6th").style.backgroundColor = "";
  document.getElementById("7th").style.color = "";
  document.getElementById("7th").style.backgroundColor = "";
}
function isDisplayCalendar06(){
  document.getElementById("sbh3").style.display = "none";
  document.getElementById("sbh4").style.display = "none";
  document.getElementById("sbh5").style.display = "none";
  document.getElementById("sbh7").style.display = "none";
  document.getElementById("sbh6").style.display = "block";

  document.getElementById("6th").style.color = "#FFFFFF";
  document.getElementById("6th").style.backgroundColor = "#2D4B70";
  document.getElementById("3rd").style.color = "";
  document.getElementById("3rd").style.backgroundColor = "";
  document.getElementById("4th").style.color = "";
  document.getElementById("4th").style.backgroundColor = "";
  document.getElementById("5th").style.color = "";
  document.getElementById("5th").style.backgroundColor = "";
  document.getElementById("7th").style.color = "";
  document.getElementById("7th").style.backgroundColor = "";
}
function isDisplayCalendar07(){
  document.getElementById("sbh3").style.display = "none";
  document.getElementById("sbh4").style.display = "none";
  document.getElementById("sbh5").style.display = "none";
  document.getElementById("sbh6").style.display = "none";
  document.getElementById("sbh7").style.display = "block";

  document.getElementById("7th").style.color = "#FFFFFF";
  document.getElementById("7th").style.backgroundColor = "#2D4B70";
  document.getElementById("3rd").style.color = "";
  document.getElementById("3rd").style.backgroundColor = "";
  document.getElementById("4th").style.color = "";
  document.getElementById("4th").style.backgroundColor = "";
  document.getElementById("5th").style.color = "";
  document.getElementById("5th").style.backgroundColor = "";
  document.getElementById("6th").style.color = "";
  document.getElementById("6th").style.backgroundColor = "";
}