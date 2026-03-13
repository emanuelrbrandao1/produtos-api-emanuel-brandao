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
  const { nome, descricao, preco, categoria, estoque } = req.body;

  //Validação: campo ausente ou vazio
  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório e deve ter no mínimo 3 caracteres", campo: "nome" });
  }

  if (!descricao || descricao.length < 10) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório e deve ter no mínimo 10 caracteres", campo: "descricao" });
  }

  if (preco === undefined || preco <= 0) {
    return res.status(400).json({ erro: "O campo 'preco' é obrigatório e deve ser maior que zero", campo: "preco" });
  }

  const categoriasValidas = ["equipamento", "servico", "acessorio"];
  if (!categoria || !categoriasValidas.includes(categoria)) {
    return res.status(400).json({ erro: "O campo 'categoria' é obrigatório e deve ser: equipamento, servico ou acessorio", campo: "categoria" });
  }

  if (estoque === undefined || estoque < 0) {
    return res.status(400).json({ erro: "O campo 'estoque' é obrigatório e deve ser maior ou igual a zero", campo: "estoque" });
  }

  //Monta o objeto com campos gerados pelo servidor
  const novo = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: true,
    criado_em: new Date().toISOString(),
    atualizado_em: new Date().toISOString()
  };

  produtos.push(novo);
  res.status(201).json(novo);
};

const atualizar = (req, res) => {
  const idx = produtos.findIndex(p => p.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body;
  produtos[idx] = {
    ...produtos[idx],
    nome, descricao, preco, categoria, estoque, ativo,
    atualizado_em: new Date().toISOString()
  };
  res.status(200).json(produtos[idx]);
};



const remover = (req, res) => {

};

module.exports = { listar, buscarPorId, criar, atualizar, remover };
