import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import Barcode from "react-barcode";
import { thema } from "@/styles/thema";
import { RootState } from "@/types/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setCheckedPay } from "@/store/reducers/pay";
import { useNavigate } from "react-router-dom";

const BoletoSimulado = () => {
  const { totValue } = useSelector((state: RootState) => state.carrinho);
  const { price } = useSelector((state: RootState) => state.frete);
  const { nome } = useSelector((state: RootState) => state.usuario);
  const [status, setStatus] = useState("Aberto");
  const [dataPagamento, setDataPagamento] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const simularPagamento = () => {
    setStatus("Pago");
    setDataPagamento(new Date().toLocaleDateString("pt-BR"));
    setTimeout(() => {
      dispatch(setCheckedPay(true));
      navigate("/checkout/address/pay/summary");
    }, 1500);
  };

  // Lógica para gerar linha digitável e código de barras fictícios
  const linhaDigitavelFicticia =
    "00099.99999 00000.000000 00000.000000 9 99990000000000";
  const codigoBarrasFicticio = "00190000000000000000000000000000000000000000"; // Usado pelo componente de barcode
  const tWidth =
    useResize() < transformNumber(thema.breakpoints.tablet) ? 1 : 1.3;
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px 1rem",
        borderRadius: "5px",
        margin: "1rem auto",
        boxSizing: "border-box",
      }}
    >
      <h2>Boleto Bancário - Simulação</h2>
      <p>
        <strong>Beneficiário: </strong>Banco do Brasil
      </p>
      <p>
        <strong>Pagador: </strong>
        {nome}
      </p>
      <hr style={{ margin: ".5rem 0" }} />
      <p>
        <strong>Valor:</strong> R$ {(price + totValue).toFixed(2)}
      </p>
      <p>
        <strong>Vencimento:</strong> {new Date().toLocaleDateString("pt-BR")}
      </p>
      <p>
        <strong>Linha Digitável:</strong> {linhaDigitavelFicticia}
      </p>
      <div style={{ textAlign: "center", margin: "2px 0" }}>
        <Barcode
          value={codigoBarrasFicticio}
          width={tWidth}
          displayValue={false}
        />
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "0.9em",
          color: "#666",
        }}
      >
        [Representação Fictícia de Código de Barras Aqui]
      </p>
      <hr style={{ margin: ".5rem 0" }} />
      <p style={{ paddingBottom: ".5rem" }}>
        <strong>Status:</strong>{" "}
        <span
          style={{
            fontWeight: "bold",
            color: status === "Pago" ? "green" : "red",
          }}
        >
          {status}
        </span>
      </p>
      {dataPagamento && (
        <p>
          <strong>Data de Pagamento (Simulada):</strong> {dataPagamento}
        </p>
      )}

      {status === "Aberto" && (
        <button
          onClick={simularPagamento}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Simular Pagamento
        </button>
      )}
    </div>
  );
};

export default BoletoSimulado;
