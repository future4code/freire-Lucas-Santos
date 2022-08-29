function howType (variable:any) {
    return typeof variable;
}

const variable = process.argv[2]

if (variable) {
  console.log(howType(variable))
} else {
  console.log("Digite uma variável")
  console.log("Exemplo1: npm start false")
  console.log("Exemplo2: npm start 13")
  console.log("Exemplo3: npm start Luis")
}