enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
  titulo:string,
  ano:number,
  genero:GENERO,
  pontuacao?:number,
}

function organizaEmType(titulo:string, ano:number, genero:GENERO, pontuacao?:number): Filme {
  if (pontuacao) {
    return {titulo, ano, genero, pontuacao}
  } else {
    return {titulo, ano, genero}
  }
}

console.log(organizaEmType("Titanic", 1997, GENERO.ACAO, 8.5))