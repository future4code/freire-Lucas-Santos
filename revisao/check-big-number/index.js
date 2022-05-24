let qnt = "test"

while (isNaN(qnt)){
    qnt = prompt("Quantos números deseja digitar?")

    if (isNaN(qnt)){
        console.log("Valor digitado não é válido. Digite um número para continuar!");
    } else if (qnt <= 0) {
        console.log("Valor digitado não é válido. Digite um número MAIOR que 0!");
        qnt = "test"
    }
}

let numbers = []

for (cont = 0; cont < qnt; cont++) {
    numbers[cont] = prompt(`${cont+1}: Digite o número desejado:`)
}

for (number of numbers) {
    console.log(number);
}