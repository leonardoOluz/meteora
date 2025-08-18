/* Função para obter o refresh token */
export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};