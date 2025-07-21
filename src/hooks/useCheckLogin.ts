import { AppDispatch } from "@/store";
import { isCheckLogin } from "@/store/reducers/usuario";
import { CheckoutSteps, RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useCheckLogin = () => {
  const isLogado = useSelector((state: RootState) => state.usuario).isLogado;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const pathCheckout = `/${CheckoutSteps.checkout}/${CheckoutSteps.Address}`;

  useEffect(() => {
    if (!isLogado) {
      dispatch(isCheckLogin());
    }
  }, [dispatch, isLogado]);

  useEffect(() => {
    if (!isLogado && location.pathname === pathCheckout) {
      navigate("/login");
    }
  }, [isLogado, navigate, location.pathname, pathCheckout]);
};

export default useCheckLogin;
