import { useState } from "react";
import Botao from "../Botao";
import { CiLogin, CiLogout } from "react-icons/ci";
import { iconsProps } from "../Cabecalho/styles";
import styled from "styled-components";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import { useNavigate } from "react-router-dom";
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
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const width = useResize();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogged((prev) => !prev);
    navigate("/login");
  };

  return (
    <>
      {width >= transformNumber(thema.breakpoints.tablet) && (
        <Botao
          classNameBtn="btnUnset"
          onClick={handleLogout}
          style={iconsStyles}
          title={isLogged ? "Clique para sair" : "Entrar ou criar conta"}
        >
          <SpanBtn>{isLogged ? "Sair" : "Entrar"}</SpanBtn>
          {isLogged ? (
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
