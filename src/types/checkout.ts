/* Interface de endereco e dados de CEP da API */
export interface IFormInputEndereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  localidade: string;
  erro?: boolean;
  status?: "idle" | "loading" | "succeeded" | "failed";
  errorMessage?: string;
}
export interface IData {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
  erro?: boolean;
}