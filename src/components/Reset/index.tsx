import { clearStorage } from "@/utils/starage";
import Botao from "../Botao";
import { clearSessionStorage } from "@/utils/session";
const Reset = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", }}
    >
      <Botao
        onClick={() => {
          clearSessionStorage();
          clearStorage();
        }}
        classNameBtn="btnUnset"
        style={{
          border: "1px solid gray",
          borderRadius: "5px",
          padding: "0.3rem",
        }}
      >
        reset
      </Botao>
    </div>
  );
};

export default Reset;
