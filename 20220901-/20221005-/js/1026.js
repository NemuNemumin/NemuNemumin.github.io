function hello(){
  console.log("こんにちはこんにちは");
}

function helloSomeone(name){
  console.log(`こんにちは${name}さん`)
}

function helloCircleArea(radius){
  return radius * radius * Math.PI;
}

function helloRectangleArea(width,height){
  return width * height;
}

hello();
helloSomeone("アスクビクターモア");
//helloCircleArea(5);
//helloRectangleArea(10,5)
console.log(helloCircleArea(5));
console.log(helloRectangleArea(33,4));