import useCheckLogin from "@/hooks/useCheckLogin";
import { Outlet } from "react-router-dom";

const RequireAuth = () => {
  useCheckLogin();
  return <Outlet />;
};

export default RequireAuth;
