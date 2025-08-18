import { toast } from "react-toastify";

export function showInfoToast(message: string) {
  toast.info(message, {
    autoClose: 2500,
    hideProgressBar: true,
    theme: "colored",
    style: {
      fontSize: "1.6rem",
      textAlign: "center",
    }
  });
}