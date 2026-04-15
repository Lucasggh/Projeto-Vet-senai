
const logRequisicao = (req, res, next) => {
  const inicio = Date.now();
  const { method, originalUrl } = req;

  res.on('finish', () => {
    const duracao = Date.now() - inicio;
    const status = res.statusCode;
    const timestamp = new Date().toISOString();

    const cor =
      status >= 500 ? '\x1b[31m' : // Vermelho — erro de servidor
      status >= 400 ? '\x1b[33m' : // Amarelo — erro de cliente
      status >= 300 ? '\x1b[36m' : // Ciano   — redirecionamento
                      '\x1b[32m';  // Verde   — sucesso
    const reset = '\x1b[0m';

    console.log(
      `${cor}[${timestamp}] ${method} ${originalUrl} → ${status} (${duracao}ms)${reset}`
    );
  });

  next();
};

export { logRequisicao };
