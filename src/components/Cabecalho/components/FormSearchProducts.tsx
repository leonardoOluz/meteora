import { HeaderFormSearch } from "../styles";
import Botao from "@/components/Botao";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setBuscador } from "@/store/reducers/buscador";
import { InputMask } from "@/components/InputMask";

const FormSearchProducts = () => {
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setBuscador(search));
    navigation("/seach-products");
    setSearch("");
  };
  return (
    <HeaderFormSearch onSubmit={handleSearch}>
      <InputMask
        mask="**********"
        $classeInput="inputBuscador"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o produto"
        type="text"
        aria-label="buscador"
      />
      <Botao
        classNameBtn="btnPrimary"
        title="Buscar"
        aria-label="buscar"
        type="submit"
      >
        Buscar
      </Botao>
    </HeaderFormSearch>
  );
};

export default FormSearchProducts;
