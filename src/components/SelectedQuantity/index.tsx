import { useState } from "react";
import Botao from "../Botao";
import { DivSelectedQuantity } from "./styles";
import Typography from "../Typography";

interface IProps {
  isDropDown?: boolean;
  totProduct?: number;
}
const SelectedQuantity = ({ isDropDown, totProduct }: IProps) => {
  const [value, setValue] = useState(1);

  return (
    <DivSelectedQuantity $flexDirection={isDropDown ? "row" : "column"}>
      <Typography elementoHtml="p" classNameTypograph="basicParagraphBold">
        Quantidade:{" "}
      </Typography>
      <div>
        <Botao
          classNameBtn="btnTerciario"
          handleClick={() => {
            setValue(value === 0 ? 0 : value - 1);
          }}
        >
          -
        </Botao>
        <span className="quantity">{totProduct}</span>

        <Botao
          classNameBtn="btnTerciario"
          handleClick={() => {
            setValue(value === 15 ? 15 : value + 1);
          }}
        >
          +
        </Botao>
      </div>
    </DivSelectedQuantity>
  );
};

export default SelectedQuantity;
