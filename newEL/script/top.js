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

function defaultScroll(month) {
  let flag = Number(month);
  document.getElementById('calenderList').scrollLeft = flag * 230;
}



function isDisplayCalender(month){
  let flag = Number(month);
  for (let i = 0; i < 13; i++){
    if (i === flag) {
      console.log(flag);
      document.getElementById(`sbh${flag}`).style.display = "block";
      document.getElementById(`menu${flag}`).style.color = "#FFFFFF";
      document.getElementById(`menu${flag}`).style.backgroundColor = "#2D4B70";
      document.getElementById('calenderList').scrollLeft = flag * 230;
      continue
    }
      console.log(i);
      document.getElementById(`sbh${i}`).style.display = "none";
      document.getElementById(`menu${i}`).style.backgroundColor = "";
      document.getElementById(`menu${i}`).style.color = "";
    }
}
