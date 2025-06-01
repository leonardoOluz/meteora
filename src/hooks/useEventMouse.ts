import { useEffect } from "react";

type BooleanFunction = (value: boolean) => void;

interface IProps<T extends HTMLElement = HTMLElement> {
  isBoolean: boolean;
  setIsBoolean: React.Dispatch<React.SetStateAction<boolean>> | BooleanFunction;
  isRef: React.RefObject<T | null>;
  eventType: keyof WindowEventMap;
}
export default function useEventMouse<T extends HTMLElement = HTMLElement>({
  isBoolean,
  setIsBoolean,
  isRef,
  eventType,
}: IProps<T>) {
  useEffect(() => {
    const handleEvent = (event: Event) => {
      if (
        isBoolean &&
        isRef.current &&
        !isRef.current.contains(event.target as Node)
      ) {
        setIsBoolean(false);
      }
    };

    window.addEventListener(eventType, handleEvent);

    return () => {
      window.removeEventListener(eventType, handleEvent);
    };
  }, [isBoolean, setIsBoolean, isRef, eventType]);
}
