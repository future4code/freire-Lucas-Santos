const myName = process.argv[2]
const myAge = Number(process.argv[3])

if ((myAge >= 0) && (myAge <= 123)) {
  console.log("\033[35m"+`Olá ${myName}! Voçê tem ${myAge} anos.`)
} else {
  console.log("\033[35m"+`Idade incorreta.`)
}