import { useLocation } from "react-router-dom";

const useArrayRoute = () => {
  const arrayRouter = useLocation()
    .pathname.replace("/", "")
    .replace(/[/]/g, " ")
    .split(" ");
  return arrayRouter;
};

export default useArrayRoute;
