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
  cursor: pointer;

  ${({ $menuAberto }) =>
    $menuAberto ? "padding: 1rem 2.4rem 0 0;" : "padding: 0;"}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
interface IProps {
  handleMenuDropDrown: React.Dispatch<React.SetStateAction<boolean>>;
  menuDropDrown: boolean;
  ariaControls?: string;
}
const MenuHamburguer = ({
  handleMenuDropDrown,
  menuDropDrown,
  ariaControls,
}: IProps) => {
  return (
    <div style={{ textAlign: "right" }}>
      <BtnMenu
        $menuAberto={menuDropDrown}
        onClick={() => handleMenuDropDrown((prev) => !prev)}
        aria-label={`menu hamburguer ${menuDropDrown ? "fechar" : "abrir"}`}
        aria-expanded={menuDropDrown}
        aria-controls={ariaControls}
      >
        {menuDropDrown ? (
          <IoCloseOutline {...stylesIcons} />
        ) : (
          <IoMenuSharp {...stylesIcons} />
        )}
      </BtnMenu>
    </div>
  );
};

export default MenuHamburguer;
