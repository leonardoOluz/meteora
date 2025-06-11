import { Link } from "react-router-dom";
import { ItemLink } from "../styles";

const SubscribeButton = () => {
  return (
    <ItemLink>
      <Link to="/cadastro" title="Cadastre-se na Meteora">
        Cadastre-se
      </Link>
    </ItemLink>
  );
};

export default SubscribeButton;