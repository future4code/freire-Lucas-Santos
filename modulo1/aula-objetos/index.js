const car = {
    name: "Mustang",
    color: "vermelho",
    year: 2020,
    brand: "Ford",
    airbag: true
}

console.log(car.year)

const people = {
    name: "Lucas Monteiro",
    pet: {
        name: "Dandara",
        breed: "Vira-Lata",
        age: 3
    }
}

console.log(people.pet)

const instructors = [
    {name: "Laís", module: 1},
    {name: "Amanda", module: 2},
    {name: "Chijo", module: 3}
]

console.log(instructors)

const newInstructors = [
    ...instructors,

    {name: "Muri", module: 1}
]

console.log(newInstructors)