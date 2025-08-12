import { KeyIdProduct } from "@/types/componentTypes";
import { RootState } from "@/types/store";
import { useSelector } from "react-redux";
import useFindSearchPromo from "./useFindSearchPromo";
import { useCallback } from "react";

const useSelectCatPromocao = () => {
  const promocoes = useSelector((state: RootState) => state.promocoes);
  const findSearchPromo = useFindSearchPromo();
  const checkPromocao = useCallback(
    (cardId: KeyIdProduct): number | undefined => {
      return findSearchPromo(cardId, promocoes);
    },
    [findSearchPromo, promocoes]
  );
  return checkPromocao;
};

export default useSelectCatPromocao;