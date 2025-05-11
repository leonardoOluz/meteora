import Typography from "@/components/Typography";
import styled from "styled-components";

const ContainerPromo = styled.div<{ $isColor?: string }>`
  width: 100%;
  background-color: ${({ $isColor }) => $isColor};
  padding: 3.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }
`;
interface IDivCatPromoProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  isColor?: string;
}

const DivCatPromo = ({
  value,
  isColor,
  children,
  ...rest
}: IDivCatPromoProps) => {
  return (
    <ContainerPromo $isColor={isColor} {...rest}>
      <Typography elementoHtml="h3" classNameTypograph="basicHeadingH3">
        {`Promoção especial ${value * 100} % OFF`}
      </Typography>
      {children}
    </ContainerPromo>
  );
};

export default DivCatPromo;
