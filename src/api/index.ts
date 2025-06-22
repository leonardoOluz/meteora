import { IFrete } from "@/types/store";
import axios from "axios";

const apiCep = axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const simulateShipping = (totCart: number): Promise<IFrete> => {
  // Simula um atraso na "resposta da API" para tornar mais realista
  return new Promise((resolve) => {
    try {
      if (totCart < 1) {
        throw new Error("Carrinho vazio");
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

export default apiCep;
