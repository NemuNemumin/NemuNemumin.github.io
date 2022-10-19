// 関数作成(まだ実行されない)
function logHello(text){
    //``を使った文字列では、変数を埋め込める
  console.log(`関数だったりするかも${text}`);
}
function logSakana(a,b,c){
  console.log(`${a}${b}${c}`);
}

function logDefault(d="デフォルト"){
  console.log(`${d}`);
}

function logReturn(){
  return "なんか関数から返ってきたんだけど";
}

//下の二つは同じこと
let str = logReturn();
console.log(str);

console.log(logReturn());

//スコープ
//関数の中の変数は、処理終了後に消える
//関数内(スコープ)で定義した変数は、関数外から参照できない

function logScope(s="仮引数"){
  let Scope1 = `${s}`;
  //これだけだと、外から参照できない
  return Scope1;
  //これで外からlogScope()で参照できる(返り値だから、返り値のやりかたで参照)
}

