```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0
  
  for (aux=0; aux < arrayDeNumeros.length; aux++) {
    if (arrayDeNumeros[aux] === numeroEscolhido) {
      cont++
    }
  }
  if (cont === 0) {
    return ("Número não encontrado")
  } else {
    return (`O número ${numeroEscolhido} aparece ${cont}x`)
  }
}
```
