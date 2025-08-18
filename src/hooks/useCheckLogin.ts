import { AppDispatch } from "@/store";
import { checkAuthenticatedUser } from "@/store/reducers/usuario";
import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckLogin = () => {
  const isLogado = useSelector((state: RootState) => state.usuario).isLogado;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogado) {
      dispatch(checkAuthenticatedUser());
    }
  }, [dispatch, isLogado, navigate]);
};

export default useCheckLogin;
