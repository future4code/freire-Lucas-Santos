function checaAnoBissexto(ano:number):boolean {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

  return cond1 || cond2
}

const ano = Number(process.argv[2])

if (ano) {
  checaAnoBissexto(ano) ? console.log("É bissexto") : console.log("Não é bissexto")
} else {
  console.log("Digite um ano!")
  console.log("Exemplo: npm start 2020")
}