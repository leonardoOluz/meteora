import { AppDispatch } from "@/store";
import { checkAuthenticatedUser } from "@/store/reducers/usuario";
import { CheckoutSteps, RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useCheckRotas = () => {
  const isLogado = useSelector((state: RootState) => state.usuario).isLogado;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogado) {
      navigate("/login");
    }
  }, [isLogado, navigate]);

  useEffect(() => {
    const privatePrefixes = [
      `/${CheckoutSteps.CHECKOUT}`,
      `/${CheckoutSteps.PEDIDOS}`,
      `/${CheckoutSteps.FAVORITOS}`,
    ];
    if (
      privatePrefixes.some((prefix) => location.pathname.startsWith(prefix))
    ) {
      dispatch(checkAuthenticatedUser());
    }
  }, [navigate, location.pathname, dispatch]);
};

export default useCheckRotas;
