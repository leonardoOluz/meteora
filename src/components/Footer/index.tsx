import Typography from "../Typography";
import { FooterStyle } from "./styles";

export const Footer = () => {
  return (
    <FooterStyle>
      <Typography elementoHtml="p" classNameTypograph="basicParagraphSmall">
        2025 © Desenvolvido por <strong>Leo Luz</strong> - | Projeto fictício sem fins comerciais,
        Desafio do figma da{" "}
        <a
          href="https://www.figma.com/design/2TLgt8UjsWUViWlmpXu5Fz/Challenge-Front-end-%7C-Loja-Meteora?node-id=2430-3983&t=rVBlfzh8Z41pgm1w-0"
          target="_blank"
        >
          Alura
        </a>{" "}
        .
      </Typography>
    </FooterStyle>
  );
};
