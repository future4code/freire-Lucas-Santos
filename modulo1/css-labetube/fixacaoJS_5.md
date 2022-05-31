```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

  let animaisNomes = []
  
  for (x=0; x < animais.length; x++) {
    animaisNomes[x] = animais[x].nome
  }
  
  return animaisNomes

}
```