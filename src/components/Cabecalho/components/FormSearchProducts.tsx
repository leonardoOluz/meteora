import Input from "@/components/Input";
import { HeaderFormSearch } from "../styles";
import Botao from "@/components/Botao";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setBuscador } from "@/store/reducers/buscador";

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
      <Input
        value={search}
        handleChange={(e) => setSearch(e.target.value)}
        placeHolder="Digite o produto"
        tipo="text"
        classeInput="inputBuscador"
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
