import { useRef, useState } from "react";
import MenuHamburguer from "../MenuHamburguer";
import { Link } from "react-router-dom";
import {
  ContainerNavbar,
  ItemLink,
  ListLinks,
  NavbarStyle,
} from "./styles";
import useEventMouse from "@/hooks/useEventMouse";

const links = [
  { to: "/", name: "Home" },
  { to: "nossas-lojas", name: "Nossas lojas" },
  { to: "/novidades", name: "Novidades" },
  { to: "/promocoes", name: "Promoções" }
];
const Navbar = () => {
  const [menuDropDrown, setMenuDropDown] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const navbarId = "navbar-links";

  useEventMouse({
    isBoolean: menuDropDrown,
    setIsBoolean: setMenuDropDown,
    isRef: navBarRef,
    eventType: "mouseover"
  });

  return (
    <ContainerNavbar $menuAberto={menuDropDrown} ref={navBarRef}>
      <MenuHamburguer
        menuDropDrown={menuDropDrown}
        handleMenuDropDrown={setMenuDropDown}
        ariaControls={navbarId}
      />
      <NavbarStyle $menuAberto={menuDropDrown}>
        <ListLinks id={navbarId}>
          {links.map((link, index) => (
            <ItemLink
              key={index}
              onClick={() => {
                setMenuDropDown(false);
              }}
            >
              <Link to={link.to} title={link.name}>{link.name}</Link>
            </ItemLink>
          ))}
        </ListLinks>
      </NavbarStyle>
    </ContainerNavbar>
  );
};

export default Navbar;
