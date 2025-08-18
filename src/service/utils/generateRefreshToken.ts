export const generateRefreshToken = (): string => {
  return `refresh-${crypto.randomUUID()}`;
};
