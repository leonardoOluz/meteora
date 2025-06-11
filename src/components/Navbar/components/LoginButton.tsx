import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ItemLink } from "../styles";
import { Link } from "react-router-dom";
import { RootState } from "@/types/store";
import { logout } from "@/store/reducers/usuario";

const LoginButton = () => {
  const user = useSelector((state: RootState) => state.usuario);
  const dispatch = useDispatch();

  return (
    <ItemLink>
      <Link
        to={user.isLogado ? "/" : "/login"}
        title={`${user.isLogado ? "Sair" : "Entrar"} na Meteora`}
        onClick={() => {
          if (user.isLogado) dispatch(logout());
        }}
      >
        {user.isLogado ? "Sair" : "Entrar"}
      </Link>
    </ItemLink>
  );
};

export default LoginButton;
