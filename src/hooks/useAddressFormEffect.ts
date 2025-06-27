import { useEffect } from "react";
import { checkShipping, resetFrete } from "@/store/reducers/frete";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { RootState } from "@/types/store";
import { IFormInputEndereco } from "@/types/checkout";
import { UseFormReset, UseFormSetError } from "react-hook-form";

interface UseAddressFormEffectProps {
  isSubmitSuccessful: boolean;
  reset: UseFormReset<IFormInputEndereco>;
  setError: UseFormSetError<IFormInputEndereco>;
}

export function useAddressFormEffect({
  isSubmitSuccessful,
  reset,
  setError,
}: UseAddressFormEffectProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navegate = useNavigate();
  const { isFrete } = useSelector((state: RootState) => state.frete);
  const { totProduct } = useSelector((state: RootState) => state.carrinho);
  const address = useSelector((state: RootState) => state.address);

  // 1. Reset do formulário quando defaultValues mudar
    useEffect(() => {
      console.log("Reset do formulário");
      reset(address);
    }, [reset, address]);

  // 2. Tratamento de erro
  useEffect(() => {
    if (address.erro) {
      setError("cep", {
        type: "validate",
        message: address.errorMessage,
      });
      dispatch(resetFrete());
      return;
    }
    if (address.status === "succeeded" && !isFrete) {
      dispatch(checkShipping(totProduct));
    }
  }, [address, dispatch, totProduct, isFrete, setError]);

  // 3. Navegação
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(address);
      navegate("/checkout/address/pay");
    }
  }, [isSubmitSuccessful, reset, navegate, address]);
}
