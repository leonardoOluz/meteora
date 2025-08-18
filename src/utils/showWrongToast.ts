import { toast } from "react-toastify";

export function showWrongToast(error: string) {
  toast.error(error, {
    autoClose: 2000,
    hideProgressBar: true,
    theme: "colored",
    style: {
      fontSize: "1.6rem",
      textAlign: "center",
    },
  });
}
