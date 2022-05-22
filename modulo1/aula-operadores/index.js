num1 = 11
num2 = 11

majority = true
male = true
driverLicense = false

console.log("Os números são:",num1,"e",num2);
console.log("Maior de idade:",majority);
console.log("Homem:",male);
console.log("Tem carteira de motorista:",driverLicense);

console.log("");

console.log("OPERADORES ARITMÉTICOS");
console.log("-soma:",num1+num2)
console.log("-subtração:",num1-num2)
console.log("-multiplicação:",num1*num2)
console.log("-divisão:",num1/num2)
console.log("-resto da divisão:",num1%num2)

console.log("");

console.log("COMPARADORES");
console.log("-Os números são iguais?",num1===num2);
console.log("-Os números são diferentes?",num1!==num2);
console.log("-",num1,"é maior que",num2,"?",num1>num2);
console.log("-",num1,"é menor que",num2,"?",num1<num2);

console.log("");

console.log("OPERADORES LÓGICOS");
console.log("-Alistamento obrigatório:",majority&&male);
console.log("-Pode dirigir:",majority&&driverLicense);
console.log("-Pode tirar carteira:",majority&&!driverLicense);