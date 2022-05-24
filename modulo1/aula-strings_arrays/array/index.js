listAnimal = []

listAnimal[0] = prompt("Digite o nome do primeiro animal:");
listAnimal[1] = prompt("Digite o nome do segundo animal:");
listAnimal[2] = prompt("Digite o nome do terceiro animal:");
listAnimal[3] = prompt("Digite o nome do quarto animal:");
listAnimal[4] = prompt("Digite o nome do quinto animal:");

numberChoice = prompt("Digite um número de 1 a 5:")
console.log(`O animal escolhido foi: ${listAnimal[numberChoice-1]}.`);
console.log("");

console.log("length: "+listAnimal.length)
console.log("");

console.log("ORIGINAL: "+listAnimal);
listAnimal.pop()
console.log("pop: "+listAnimal);
listAnimal.splice(2,1)
console.log("splice(2,1): "+listAnimal);
listAnimal.push(123,456,789)
console.log("push(123,456,789): "+listAnimal);