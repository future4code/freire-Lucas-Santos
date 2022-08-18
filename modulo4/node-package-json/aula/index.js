import { countries } from "./countries.js";

const myCountrie = process.argv[2]

const result = countries.filter(countrie => {
  return countrie.name.toLowerCase().includes(myCountrie)
})

console.table(result)