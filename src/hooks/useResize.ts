import { useEffect, useState } from "react";

export default function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  return {
    width
  };
}
