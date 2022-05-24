//Template String
username1 = prompt(`Qual o seu nome?`)
favColor1 = prompt(`Qual a sua cor favorita?`)
console.log(`A cor favorita de ${username1} é ${favColor1}!`)

//Concatenação
username2 = prompt("Qual o seu nome?")
favColor2 = prompt("Qual a sua cor favorita?")
console.log("A cor favorita de "+username2+" é "+favColor2+"!")

console.log("")

//Quantidade de caracteres
qntCharUsername1 = username1.length
qntCharUsername2 = username2.length
console.log(`length de ${username1} - ${qntCharUsername1}.`)
console.log(`length de ${username2} - ${qntCharUsername2}.`)

console.log("")

//Todas as letras maiúsculas
upperUsername1 = username1.toUpperCase()
upperUsername2 = username2.toUpperCase()
console.log(`toUpperCase - ${upperUsername1}`)
console.log(`toUpperCase - ${upperUsername2}`)

console.log("")

//Todas as letras minúsculas
lowerUsername1 = username1.toLowerCase()
lowerUsername2 = username2.toLowerCase()
console.log(`toLowerCase - ${lowerUsername1}`)
console.log(`toLowerCase - ${lowerUsername2}`)

console.log("")

//Retira espaços antes e depois
trimUsername1 = username1.trim()
trimUsername2 = username2.trim()
console.log(`trim - ${trimUsername1}`)
console.log(`trim - ${trimUsername2}`)

console.log("")

//Troca um termo por outro
auxPhrase1 = prompt(`Digite uma frase qualquer:`)

auxWord1 = prompt(`A frase digitada foi: ${auxPhrase1}
Qual parte da frase digitada você deseja retirar?`)

auxWord2 = prompt(`O que você deseja inserir no lugar de: ${auxWord1}?`)

auxPhrase2 = auxPhrase1.replaceAll(auxWord1,auxWord2)
console.log(`ORIGINAL - ${auxPhrase1}`)
console.log(`replaceAll - ${auxPhrase2}`)