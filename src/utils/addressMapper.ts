import { IData, IFormInputEndereco } from "@/types/checkout";

export function mapApiToFormInput(data: IData): IFormInputEndereco {
  return {
    cep: data.cep,
    rua: data.logradouro,
    bairro: data.bairro,
    localidade: `${data.localidade}, ${data.uf}`,
    numero: "", // ou algum valor padrão
  };
}