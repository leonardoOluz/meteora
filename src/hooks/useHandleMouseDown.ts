import { useEffect } from "react";

interface IProps {
  isBoolean: boolean;
  setIsBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  isRef: React.RefObject<HTMLDivElement | null>;
}

export default function useHandleMouseDown({
  isBoolean,
  setIsBoolean,
  isRef,
}: IProps) {

  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (isBoolean && !isRef.current?.contains(event.target as Node)) {
        setIsBoolean(false);
        console.log("useHandleMouseOut")
      }
    };
    window.addEventListener("mousedown", handleMouseOut);
    return () => window.removeEventListener("mousedown", handleMouseOut);
  }, [isBoolean, setIsBoolean, isRef]);
}
