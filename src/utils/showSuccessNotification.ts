import { toast } from "react-toastify";

export function showSuccessNotification(nome: string) {
  toast.success(nome, {
    autoClose: 2500,
    theme: "colored",
    hideProgressBar: true,
    style: {
      fontSize: "1.6rem",
      textAlign: "center",
    },
  });
}
