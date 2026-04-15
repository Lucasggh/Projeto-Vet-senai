const CHAVE_ACESSO = 'token123';
//exemplo de token, em aplicações reais utilizaria jwt, mas se for fazer aqui teria que fazer sistema de login, cadastro, etc... e não é o foco do projeto, então deixei um token fixo para exemplificar a autenticação
const autenticar = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({
      erro: 'Acesso negado. Crachá de identificação não encontrado.',
      dica: 'Envie o cabeçalho: Authorization: Bearer <chave>',
    });
  }
  const token = authHeader.split(' ')[1];
  if (token !== CHAVE_ACESSO) {
    return res.status(403).json({
      erro: 'Acesso proibido. Crachá inválido ou vencido.',
    });
  }
  next();
};

export {autenticar}