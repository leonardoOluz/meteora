import { useRef, useState } from "react";
import MenuHamburguer from "../MenuHamburguer";
import { Link } from "react-router-dom";
import { ContainerNavbar, ItemLink, ListLinks, NavbarStyle } from "./styles";
import useEventMouse from "@/hooks/useEventMouse";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { thema } from "@/styles/thema";
import LoginButton from "./components/LoginButton";
import SubscribeButton from "./components/SubscribeButton";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";

const routes = {
  home: "/",
  nossasLojas: "/nossas-lojas",
  novidades: "/novidades",
  promocoes: "/promocoes",
};
const getLink = (route: string, name: string, onClick?: () => void) => (
  <ItemLink onClick={onClick}>
    <Link to={route} title={name}>
      {name}
    </Link>
  </ItemLink>
);
const Navbar = () => {
  const [menuDropDrown, setMenuDropDown] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const user = useSelector((state: RootState) => state.usuario);
  const width = useResize();

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
        ariaControls="navbar-links"
      />
      <NavbarStyle $menuAberto={menuDropDrown}>
        <ListLinks id="navbar-links" onClick={() => setMenuDropDown(false)}>
          {getLink(routes.home, "Home")}
          {getLink(routes.nossasLojas, "Nossas lojas")}
          {getLink(routes.novidades, "Novidades")}
          {getLink(routes.promocoes, "Promoções")}
          {!user.isLogado && <SubscribeButton />}
          {width < transformNumber(thema.breakpoints.tablet) ? (
            <LoginButton />
          ) : (
            <></>
          )}
        </ListLinks>
      </NavbarStyle>
    </ContainerNavbar>
  );
};

export default Navbar;
