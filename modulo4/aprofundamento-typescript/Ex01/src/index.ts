function nameDate (name:string, date:string) {
  const day = date.split('/')[0]

  var month = date.split('/')[1]
  if (month === "01") {
    month = "Janeiro"
  } else if (month === "02") {
    month = "Fevereiro"
  } else if (month === "03") {
    month = "Março"
  } else if (month === "04") {
    month = "Abril"
  } else if (month === "05") {
    month = "Maio"
  } else if (month === "06") {
    month = "Junho"
  } else if (month === "07") {
    month = "Julho"
  } else if (month === "08") {
    month = "Agosto"
  } else if (month === "09") {
    month = "Setembro"
  } else if (month === "10") {
    month = "Outubro"
  } else if (month === "11") {
    month = "Novembro"
  } else if (month === "12") {
    month = "Dezembro"
  }

  const year = date.split('/')[2]

  return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`;
}

const myName = process.argv[2]
const myDate = process.argv[3]

if (myName && (myDate.split('/').length === 3)) {
  console.log(nameDate(myName, myDate))
} else {
  console.log("Digite um nome e uma data")
  console.log("Exemplo: npm start João 21/07/1990")
}