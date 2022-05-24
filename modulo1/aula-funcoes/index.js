function format(name){
    name = name.toLowerCase().trim().replaceAll(" ","-")

    return name
}

name1 = "Bill Gates  "
name2 = " Jeff Bezos"
name3 = "Elon Musk"

console.log(format(name1))
console.log(format(name2))
console.log(format(name3))

//Função anônima
let greetings = function(name){
    console.log(`Olá, ${name}`);
}

greetings(name1)

//Arrow function
let sum = (num1,num2) =>{
    result = num1 + num2
    return result
}

console.log(sum(2,5))

