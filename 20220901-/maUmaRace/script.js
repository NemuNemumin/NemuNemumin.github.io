//再現するボタンが押されると呼び出されるリプロダクション関数君//
function reproduction() {
    let corner1 = document.getElementById("corner1");//1コーナーの値を取得
    console.log(corner1.value);
    let corner2 = document.getElementById("corner2").value;//2コーナーの値を取得
    console.log(corner2.value);
    let corner3 = document.getElementById("corner3");//3コーナーの値を取得
    console.log(corner3.value);
    let corner4 = document.getElementById("corner4");//4コーナーの値を取得
    console.log(corner4.value);
    let raceResult = document.getElementById("raceResult");//最終順位の値を取得
    console.log(raceResult.value);
    //.valueは中身が値の目印。中身とかでもいいかも。//
}
corner2 = "3(10,12)(1,9)(6,8)(2,13)7,5,4-11-14-15";
let splitC2 = corner2.replace(/\(|,|-|=|\)|\*/g,'@'); //配列で区切る準備のために一旦区切りを全て@にする
let arrayC2 = splitC2.split('@');//@で区切って配列にする
let arrayToNumC2 = arrayC2.map(Number);//文字列の配列を数値の配列にする
let maxHorseNum = arrayToNumC2.reduce(function (a,b){//数値の配列から最大値を取得する
    return Math.max(a,b);
});
console.log(maxHorseNum);

let splitC2_race = corner2.match(/\(.*?\)/g); // ()内の文字列をすべて取得(文字列の配列で返ってきてる)
console.log(splitC2_race);
