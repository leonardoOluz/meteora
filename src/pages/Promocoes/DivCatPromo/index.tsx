import Typography from "@/components/Typography";
import styled from "styled-components";

const ContainerPromo = styled.div<{ $isColor?: string }>`
  background-color: ${({ $isColor }) => $isColor};
  padding: 3.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  box-sizing: border-box;
`;
interface IDivCatPromoProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  isColor?: string;
}

const DivCatPromo = ({ value, isColor, children }: IDivCatPromoProps) => {
  return (
    <ContainerPromo $isColor={isColor}>
      <Typography elementoHtml="h3" classNameTypograph="basicHeadingH3">
        {`Promoção especial ${value * 100} % OFF`}
      </Typography>
      {children}
    </ContainerPromo>
  );
};

export default DivCatPromo;
