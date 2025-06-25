import apiCep from "@/api";
import { IData } from "@/types/checkout";
import { IFrete } from "@/types/store";

export const fetchConsultaCep = async (cep: string): Promise<IData> => {
  if (!cep || cep.length < 8) {
    throw new Error("O campo CEP é obrigatório");
  }
  try {
    const { data } = await apiCep.get<IData>(`/ws/${cep}/json/`);
    if (data.erro) {
      throw new Error("O CEP não existe ou é inválido");
    }
    return data;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ocorreu um erro desconhecido");
    }
  }
};
export const simulateShipping = (totCart: number): Promise<IFrete> => {
  // Simula um atraso na "resposta da API" para tornar mais realista
  return new Promise((resolve) => {
    try {
      if (totCart < 1) {
        resolve({
          service: "Sem produto",
          price: 0,
          deliveryTime: "N/A",
          isFrete: false,
        });
      }
      setTimeout(() => {
        const price = [
          10.0, 15.0, 20.0, 25.0, 30.0, 50.0, 75.0, 100.0, 120.0, 150.0,
        ];
        const randomPrice = (
          price[totCart - 1] +
          (Math.random() * 100) / price[totCart - 1]
        ).toFixed(2); //; Gera um valor entre 10 e 150
        const minDeliveryDays = 2;
        const maxDeliveryDays = 15;
        const randomDeliveryDays =
          Math.floor(Math.random() * (maxDeliveryDays - minDeliveryDays + 1)) +
          minDeliveryDays; // Gera um número inteiro de dias

        resolve({
          service: "Entrega Padrão",
          price: parseFloat(randomPrice),
          deliveryTime: `${randomDeliveryDays} dias úteis`,
          isFrete: true,
          // Você pode adicionar mais campos aqui, como transportadora, tipo de frete, etc.
        });
      }, 500); // Simula 500ms de atraso
    } catch (error) {
      console.error("Erro ao simular o frete:", error);
      resolve({
        service: "Erro na simulação",
        price: 0,
        deliveryTime: "N/A",
        isFrete: false,
      });
    }
  });
};
