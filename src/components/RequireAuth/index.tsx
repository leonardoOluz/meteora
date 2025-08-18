import useCheckRotas from "@/hooks/useCheckRotas";
import { Outlet } from "react-router-dom";

const RequireAuth = () => {
  useCheckRotas();
  return <Outlet />;
};

export default RequireAuth;
