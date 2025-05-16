import { useEffect, useState } from "react";

const useCheckPrice = (isPrice: number, valueCatPromo?: number) => {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (valueCatPromo) {
      setPrice(isPrice - isPrice * valueCatPromo);
    } else {
      setPrice(isPrice);
    }
  }, [isPrice, valueCatPromo]);

  return { price };
};

export default useCheckPrice;
