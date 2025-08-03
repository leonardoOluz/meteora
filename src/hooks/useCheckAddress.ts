import { RootState } from "@/types/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCheckAddress = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
  const navigate = useNavigate();
  const toastShown = useRef(false);

  useEffect(() => {
    if (!addressChecked && !toastShown.current) {
      toastShown.current = true;
      toast.error("Você precisa informar o endereço para continuar", {
        hideProgressBar: true,
        autoClose: 2500,
        theme: "colored",
      });
      navigate("/checkout/address");
    }
  }, [addressChecked, navigate]);
};

export default useCheckAddress;
