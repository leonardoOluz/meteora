import { thema } from "@/styles/thema";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import styled from "styled-components";

const stylesIcons = {
  size: 20,
  color: thema.colorsPrimary.verde,
};
const BtnMenu = styled.button<{ $menuAberto: boolean }>`
  all: unset;
  width: auto;
  background-color: transparent;
  box-sizing: border-box;

  ${({ $menuAberto }) =>
    $menuAberto ? "padding: 1rem 2.4rem 0 0;" : "padding: 0;"}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
interface IProps {
  setMenuAberto: React.Dispatch<React.SetStateAction<boolean>>;
  menuAberto: boolean;
}
const MenuHamburguer = ({ setMenuAberto, menuAberto }: IProps) => {
  return (
    <div style={{ textAlign: "right" }}>
      <BtnMenu
        $menuAberto={menuAberto}
        onClick={() => setMenuAberto(!menuAberto)}
        onBlur={()=> setMenuAberto(false)}
        aria-label={`menu hamburguer ${menuAberto ? "fechar" : "abrir"}`}
      >
        {menuAberto ? (
          <IoCloseOutline {...stylesIcons} />
        ) : (
          <IoMenuSharp {...stylesIcons} />
        )}
      </BtnMenu>
    </div>
  );
};

export default MenuHamburguer;
