import { useRef, useState } from "react";
import MenuHamburguer from "../MenuHamburguer";
import { Link } from "react-router-dom";
import { ContainerNavbar, ItemLink, ListLinks, NavbarStyle } from "./styles";
import useEventMouse from "@/hooks/useEventMouse";
import useResize from "@/hooks/useResize";
import { thema } from "@/styles/thema";
import transformNumber from "@/utils/transformNumber";

const links = [
  { to: "/", name: "Home" },
  { to: "nossas-lojas", name: "Nossas lojas" },
  { to: "/novidades", name: "Novidades" },
  { to: "/promocoes", name: "Promoções" },
];
const Navbar = () => {
  const [menuDropDrown, setMenuDropDown] = useState(false);
  const [logar, setLogar] = useState<string>("Entrar");
  const navBarRef = useRef<HTMLDivElement>(null);
  const navbarId = "navbar-links";
  const width = useResize();

  const Logar =
    width < transformNumber(thema.breakpoints.tablet) ? (
      <ItemLink>
        <Link
          to="/login"
          title={`${logar} na Meteora`}
          onClick={() =>
            setLogar((prev) => (prev === "Entrar" ? "Sair" : "Entrar"))
          }
        >
          {logar}
        </Link>
      </ItemLink>
    ) : (
      <></>
    );

  useEventMouse({
    isBoolean: menuDropDrown,
    setIsBoolean: setMenuDropDown,
    isRef: navBarRef,
    eventType: "mouseover",
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
              <Link to={link.to} title={link.name}>
                {link.name}
              </Link>
            </ItemLink>
          ))}
          {Logar}
        </ListLinks>
      </NavbarStyle>
    </ContainerNavbar>
  );
};

export default Navbar;
