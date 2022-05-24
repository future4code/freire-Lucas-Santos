// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let last = array.length - 1

    for (cont=0; cont<(array.length/2); cont++){
        aux = array[cont]
        array[cont] = array[last-cont]
        array[last-cont] = aux   
    }

    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let last = array.length

    for (cont1=0; cont1<last; cont1++) {
        for (cont2=0; cont2<last; cont2++) {
            if (array[cont1] < array[cont2]) {
                aux = array[cont1]
                array[cont1] = array[cont2]
                array[cont2] = aux
            }
        }
    }

    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    newArray = []

    for (cont=0; cont<(array.length);cont++) {
        if ((array[cont]%2) === 0) {
            newArray.push(array[cont])
        }
    }

    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    newArray = []

    for (cont=0; cont<(array.length);cont++) {
        if ((array[cont]%2) === 0) {
            newArray.push(array[cont] * array[cont])
        }
    }

    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    biggerNumber = 0

    for (cont=0; cont<(array.length); cont++) {
        if (biggerNumber < array[cont]) {
            biggerNumber = array[cont]
        }
    }

    return biggerNumber
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let myNumber = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    
    if (num1 > num2) {
        myNumber.maiorNumero = num1
        myNumber.diferenca = num1 - num2

        if ((num1%num2) === 0) {
            myNumber.maiorDivisivelPorMenor = true
        } else {
            myNumber.maiorDivisivelPorMenor = false
        }
    } else {
        myNumber.maiorNumero = num2
        myNumber.diferenca = num2 - num1

        if ((num2%num1) === 0) {
            myNumber.maiorDivisivelPorMenor = true
        } else {
            myNumber.maiorDivisivelPorMenor = false
        }
    }

    return myNumber
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let cont = 0
    let number = 0
    let array = []

    while (cont < n) {
        if ((number%2) === 0) {
            array.push(number)

            cont++
        }

        number++
    }

   return array
}

// EXERCÍCIO 09                10     15    20
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        return "Equilátero"
    } else if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let last = array.length

    for (cont1=0; cont1<last; cont1++) {
        for (cont2=0; cont2<last; cont2++) {
            if (array[cont1] < array[cont2]) {
                aux = array[cont1]
                array[cont1] = array[cont2]
                array[cont2] = aux
            }
        }
    }

    return [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    last = filme.atores.length

    for (cont=1; cont<last; cont++) {
        filme.atores[cont] = ` ${filme.atores[cont]}`
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let newPessoa = pessoa

    newPessoa.nome = "ANÔNIMO"

    return newPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) =>
        (pessoa.idade > 14) && (pessoa.altura >= 1.5) && (pessoa.idade < 60)
    )
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) =>
        (pessoa.idade <= 14) || (pessoa.altura < 1.5) || (pessoa.idade >= 60)
    )
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach(conta => {
        conta.saldoTotal -= conta.compras.reduce((previousValue, currentValue) =>
        previousValue + currentValue, 0)

        conta.compras = []
    })

    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a,b) {
        if (a.nome < b.nome) {
            return -1
        } else {
            return 1
        }
    })

    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function(a,b) {
        if (a.dataDaConsulta < b.dataDaConsulta) {
            return 1
        } else {
            return -1
        }
    })

    return consultas
}