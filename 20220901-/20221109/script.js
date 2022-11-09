/*
while         ->抜け出したい条件がわかっている時
  brake         ->whileを終了
  continue      ->以下の処理をスキップする、whileは続行
    guard文と呼ばれることがある
for           ->回数がわかっている時
Array#forEach ->配列オブジェクトの回数分

 */


function doLoop(){
  let i = 0;
  let sum = 0;
  let answer = document.querySelector("#answer")
  while(i <= 10000){
    sum += i;
    i++
    if (sum > 50000){
      break
    }
  }
  answer.innerHTML = sum;
}

function doFizzBuzz(){
  let i = 0;
  let answer1 = document.querySelector("#answerFizzBuzz")
  while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
      answer1.append = "FizzBuzz <br>" ;
    } else if (i % 3 == 0){
      answer1.append = "Fizz <br>";
    } else if (i % 5 == 0){
      answer1.append = "Buzz <br>";
    } else {
      answer1.append = `${i} <br>`;
    }
  }
}

/*
Array型
添え字は連番
0からn-1番目までデータが入っている
配列はArray名[n]で参照できる

配列は中身を順番に処理してくれる関数がある
Array名.forEach(function(num)){
console.log(num);
}
forEach->Array名の中身に対して、function(num)を個数分実行する

document.querySelectorAll(セレクター名)
NodeListオブジェクト形式で返ってくる(配列ではない)
Array.from()を通して、配列に変換できる。
->forEachできるようになる
 */

let numbers = ["one","two","three"];

console.log(numbers[0]); //one
console.log(numbers[1]); //two
console.log(numbers[2]); //threeと出力される



