function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string) {  
  console.log(cor1, cor2, cor3);
}

const cor1 = process.argv[2]
const cor2 = process.argv[3]
const cor3 = process.argv[4]

if (cor1 && cor2 && cor3) {
  imprimeTresCoresFavoritas(cor1, cor2, cor3)
} else {
  console.log("Digite as três cores favoritas!")
  console.log("Exemplo: npm start azul verde amarelo")
}