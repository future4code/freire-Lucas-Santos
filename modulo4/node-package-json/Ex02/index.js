const option = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if ((isNaN(num1)) || (isNaN(num2))) {
  console.log(`Valores incorretos.`)
  console.log(`script: npm start`)
  console.log(`argv[2]: add || sub || mult || div`)
  console.log(`argv[3,4]: Numbers`)
} else {
  if (option === "add") {
    console.log(`Resultado: ${num1+num2}`)
  } else if (option === "sub") {
    console.log(`Resultado: ${num1-num2}`)
  } else if (option === "mult") {
    console.log(`Resultado: ${num1*num2}`)
  } else if (option === "div") {
    console.log(`Resultado: ${num1/num2}`)
  } else {
    console.log(`Operação incorreta.`)
    console.log(`script: npm start`)
    console.log(`argv[2]: add || sub || mult || div`)
    console.log(`argv[3,4]: Numbers`)
  }
}