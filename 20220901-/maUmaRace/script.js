//再現するボタンが押されると呼び出されるリプロダクション関数君//
function reproduction() {
    let corner1 = document.getElementById("corner1");//1コーナーの値を取得
    console.log(corner1.value);
    let corner2 = document.getElementById("corner2");//2コーナーの値を取得
    console.log(corner2.value);
    let corner3 = document.getElementById("corner3");//3コーナーの値を取得
    console.log(corner3.value);
    let corner4 = document.getElementById("corner4");//4コーナーの値を取得
    console.log(corner4.value);
    let raceResult = document.getElementById("raceResult");//最終順位の値を取得
    console.log(raceResult.value);
    //.valueは中身が値の目印。中身とかでもいいかも。//
}
