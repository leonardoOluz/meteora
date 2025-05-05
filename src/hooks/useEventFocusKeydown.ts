import { useCallback, useEffect } from "react";

type Props = {
  dialogModalRef: React.RefObject<HTMLDialogElement | null>;
  isOpen: boolean;
  handleClose: () => void;
};
export default function useEventFocusKeydown({
  dialogModalRef,
  isOpen,
  handleClose,
}: Props) {

  const captureFocus = useCallback((event: FocusEvent) => {
    if (!dialogModalRef.current?.contains(event.target as Node)) {
      dialogModalRef.current?.focus();
    }
  }, [dialogModalRef]);

  const handleCloseModal = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("focusin", captureFocus);
      document.addEventListener("keydown", handleCloseModal);
      dialogModalRef.current?.focus();
    }
    return () => {
      document.removeEventListener("focusin", captureFocus);
      document.removeEventListener("keydown", handleCloseModal);
    };
  }, [isOpen, captureFocus, handleCloseModal, dialogModalRef]);
}
