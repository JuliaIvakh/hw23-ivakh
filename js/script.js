function GetPar() {
  let par = 0;
  return function (param) {
    return (par += param);
  };
}
const sum = GetPar();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
