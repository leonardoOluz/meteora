import Botao from "../Botao";
import { CiLogin, CiLogout } from "react-icons/ci";
import { iconsProps } from "../Cabecalho/styles";
import styled from "styled-components";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/types/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/reducers/usuario";

const iconsStyles = {
  width: "6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};
const SpanBtn = styled.span`
  display: block;
  box-sizing: border-box;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colorsPrimary.branco};
`;
const BtnLogar = () => {
  const user = useSelector((state: RootState) => state.usuario);
  const dispatch = useDispatch();
  const width = useResize();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user.isLogado) {
      dispatch(logout());
      navigate("/");
      return;
    }
    navigate("/login");
  };

  return (
    <>
      {width >= transformNumber(thema.breakpoints.tablet) && (
        <Botao
          classNameBtn="btnUnset"
          onClick={handleLogout}
          style={iconsStyles}
          title={user.isLogado ? "Clique para sair" : "Entrar ou criar conta"}
        >
          <SpanBtn>{user.isLogado ? "Sair" : "Entrar"}</SpanBtn>
          {user.isLogado ? (
            <CiLogout {...iconsProps} size={15} />
          ) : (
            <CiLogin {...iconsProps} size={15} />
          )}
        </Botao>
      )}
    </>
  );
};

export default BtnLogar;
