import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckAddress = () => {
  const { addressChecked } = useSelector((state: RootState) => state.address);
  const navigate = useNavigate();
  useEffect(() => {
    if (!addressChecked) {
      console.log("faltou o endereço", addressChecked);
      navigate("/checkout/address");
    }
  }, [addressChecked, navigate]);
};

export default useCheckAddress;
