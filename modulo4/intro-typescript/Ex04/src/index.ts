function comparaDoisNumeros(num1:number, num2:number) {
  if (num1 > num2) {
    return (num1 - num2);
  } else {
    return (num2 - num1);
  }
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (num1 && num2) {
  console.log(comparaDoisNumeros(num1, num2));
} else {
  console.log("Digite dois números!");
  console.log("Exemplo: npm start 13 31");
}