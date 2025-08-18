// Função utilitária para gerar um token de acesso simulado
export const generateAccessToken = (): string => {
  return crypto.randomUUID();
};