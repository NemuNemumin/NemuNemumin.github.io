/*
オブジェクト=複雑なデータ型ほかの言語では連想配列などで呼ばれる
複数の値をまとめたものという理解でOK(騎手名、身長、体重などでそれぞれまとまっている)
返り値でオブジェクトを使えると強力
欲しいデータはオブジェクトの中にあるし、オブジェクトを操作したければオブジェクトに対して行う
プロパティと値の繰り返し(騎手名:武豊など(騎手名がプロパティで、武豊が値))
,で区切って並べていく
{
  プロパティ名:値,
  プロパティ名:値;
  ...
}

 */

obj = {name : "たけゆたか",weight: "50kg"}
console.log(obj);
console.log(obj.name);
console.log(obj.weight);
//別の書き方
console.log(obj["name"]);

//オブジェクトに追加
obj.height = 171;

console.log(obj);

/*
オブジェクトを入れ子にすることもできる
 */