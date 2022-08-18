function checaRenovacao(anoAtual:number, anoNascimento:number, anoEmissao:number) {
  const idade = anoAtual - anoNascimento;
  const tempoCarteira = anoAtual - anoEmissao;

  if (idade >= 0 && idade <= 20) {
    return tempoCarteira >= 5 ? "Precisa renovar" : "Não precisa renovar";
  } else if (idade > 20 && idade <= 50) {
    return tempoCarteira >= 10 ? "Precisa renovar" : "Não precisa renovar";
  } else if (idade > 50 && idade <= 123) {
    return tempoCarteira >= 15 ? "Precisa renovar" : "Não precisa renovar";
  } else {
    return "Idade inválida";
  }
}

const anoAtual = Number(process.argv[2]);
const anoNascimento = Number(process.argv[3]);
const anoEmissao = Number(process.argv[4]);

if (anoAtual && anoNascimento && anoEmissao) {
  console.log(checaRenovacao(anoAtual, anoNascimento, anoEmissao));
} else {
  console.log("Digite os três anos na ordem: Atual, Nascimento, Emissao");
  console.log("Exemplo: npm start 2019 1997 2018");
}