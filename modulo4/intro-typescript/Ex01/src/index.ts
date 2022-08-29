function checaTriangulo(a:number, b:number, c:number) {
  if (a !== b && b !== c && a !== c) {
    return 'É um triângulo escaleno!'
  } else if (a === b && b === c) {
    return 'É um triângulo equilátero!'
  } else {
    return 'É um triângulo isósceles!'
  }
}

const a = Number(process.argv[2])
const b = Number(process.argv[3])
const c = Number(process.argv[4])

if (a && b && c) {
  console.log(checaTriangulo(a, b, c))
} else {
  console.log("Digite os três lados do triângulo!")
  console.log("Exemplo: npm start 3 4 5")
}