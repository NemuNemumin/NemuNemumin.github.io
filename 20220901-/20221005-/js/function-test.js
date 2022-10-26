function calculation(a,b){
  console.log(a*b);
}
function calculationReturn(a,b){
  return a*b;
}
function caReturnFirstDigit(a,b){
  return (a * b) % 10;
}

function string(number) {
  return undefined;
}

function caReturnTwoDigit(a,b){
  let numString = string(a*b);
  return numString.substring(numString.length -2, numString.length -1);
}
