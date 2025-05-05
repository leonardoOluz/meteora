import { useRef } from "react";
import MenuHamburguer from "../MenuHamburguer";
import { Link } from "react-router-dom";
import {
  ContainerStyle,
  LinkStyle,
  ListaLinksStyle,
  NavbarStyle,
} from "./styles";
import useEventMouse from "@/hooks/useEventMouse";

const links = [
  { to: "/", name: "Home" },
  { to: "#", name: "Nossas lojas" },
  { to: "#", name: "Novidades" },
  { to: "#", name: "Promoções" },
];

interface IProps {
  menuDropDrown: boolean;
  handleMenuDropDrown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ menuDropDrown, handleMenuDropDrown }: IProps) => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const navbarId = "navbar-links";

  useEventMouse({
    isBoolean: menuDropDrown,
    setIsBoolean: handleMenuDropDrown,
    isRef: navBarRef,
    eventType: "mouseover"
  });

  return (
    <ContainerStyle $menuAberto={menuDropDrown} ref={navBarRef}>
      <MenuHamburguer
        menuDropDrown={menuDropDrown}
        handleMenuDropDrown={handleMenuDropDrown}
        ariaControls={navbarId}
      />
      <NavbarStyle $menuAberto={menuDropDrown}>
        <ListaLinksStyle id={navbarId}>
          {links.map((link, index) => (
            <LinkStyle
              key={index}
              onClick={() => {
                handleMenuDropDrown(false);
              }}
            >
              <Link to={link.to} title={link.name}>{link.name}</Link>
            </LinkStyle>
          ))}
        </ListaLinksStyle>
      </NavbarStyle>
    </ContainerStyle>
  );
};

export default Navbar;
