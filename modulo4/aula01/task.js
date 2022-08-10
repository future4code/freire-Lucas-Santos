function task(task) {
  const list = ['Compras da casa', 'Faxina', 'Lavar carro', 'Pagar contas'];
  list.push(task);
  return list;
}

module.exports = { task };