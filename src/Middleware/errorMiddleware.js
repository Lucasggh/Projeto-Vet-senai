
const tratarErro = (err, req, res, next) => {
  console.error('\x1b[31m[ERRO]\x1b[0m', err.stack || err.message || err);

  const status = err.status || err.statusCode || 500;

  const resposta = {
    erro: err.message || 'Erro interno do servidor.',
  };

  if (process.env.NODE_ENV === 'development') {
    resposta.stack = err.stack;
  }

  res.status(status).json(resposta);
};

export { tratarErro };
