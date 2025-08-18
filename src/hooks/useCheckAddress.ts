import { RootState } from "@/types/store";
import { showWrongToast } from "@/utils/showWrongToast";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckAddress = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
  const navigate = useNavigate();
  const toastShown = useRef(false);

  useEffect(() => {
    if (!addressChecked && !toastShown.current) {
      toastShown.current = true;
      showWrongToast("Você precisa informar o endereço para continuar");
      navigate("/checkout/address");
    }
  }, [addressChecked, navigate]);
};

export default useCheckAddress;
