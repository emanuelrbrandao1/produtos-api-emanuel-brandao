let produtos = [];
let nextId = 1;

const listar = (req, res) => {
    res.status(200).json(produtos)
};

const buscarPorId = (req, res) => {
      const p = produtos.find(p => p.id === Number(req.params.id));
  if (!p) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(p);
};

const criar = (req, res) => {

};

const atualizar = (req, res) => {

};

const remover = (req, res) => {

};

module.exports = { listar, buscarPorId, criar, atualizar, remover };
