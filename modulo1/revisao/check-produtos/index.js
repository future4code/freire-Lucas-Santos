let products = [
    {name: "Bolsa de Luxo", category: "Acessório", price: 200},
    {name: "Óleo", category: "Alimento", price: 20},
    {name: "Shampoo", category: "Cosmético", price: 15},
    {name: "Sofá", category: "Móvel", price: 1500},
    {name: "Televisão", category: "Eletrônico", price: 2000},
    {name: "Estante", category: "Móvel", price: 900},
    {name: "Som", category: "Eletrônico", price: 750},
]

let newProducts = products.map((product) => {
    return {...product, price: (product.price*0.9).toFixed(2)}
})

console.log(newProducts)

console.log("");

let eletronicOnly = products.filter((product) =>{
    return product.category === "Eletrônico"
})

console.log(eletronicOnly)