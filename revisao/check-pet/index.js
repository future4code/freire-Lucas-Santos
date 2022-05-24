pet = prompt("Digite um animal:")
pet = pet.toLowerCase()

switch (pet) {
    case "cachorro":
        console.log("au-au")
        break
    case "gato":
        console.log("miau")
        break
    case "vaca":
        console.log("muuuuuh")
        break
    case "passarinho":
        console.log("QUE SOM É ESSE?")
    default:
        console.log("animal não identificado")
        break
}