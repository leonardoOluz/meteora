// src/hooks/useCardBrandIcon.tsx
import { ReactElement, useMemo } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiEllo } from "react-icons/si";
import { IconType } from "react-icons";

export function useCardBrandIcon(cardNumber: string): ReactElement | null {
  // Remove tudo que não for número
  const cleanNumber = cardNumber.replace(/\D/g, "");

  // Função para identificar a bandeira
  const getBrand = (num: string): IconType | null => {
    if (
      /^4011|^4312|^4389|^4514|^4576|^5041|^5066|^5067|^5090|^6277|^6362|^6363/.test(
        num
      )
    )
      return SiEllo; // Exemplos de BINs Elo
    if (/^4/.test(num)) return FaCcVisa; // Visa começa com 4
    if (/^5[1-5]/.test(num)) return FaCcMastercard; // Mastercard começa com 51-55
    return null;
  };

  const BrandIcon = useMemo(() => {
    const Icon = getBrand(cleanNumber);
    return Icon ? <Icon size={30} /> : null;
  }, [cleanNumber]);

  return BrandIcon;
}
