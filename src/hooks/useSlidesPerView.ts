import useResize from "./useResize";
import { useEffect, useState } from "react";

const useSlidesPerView = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
  const width = useResize();

  useEffect(() => {
    if (width >= 1024) {
      setSlidesPerView(3);
    } else if (width >= 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  }, [width]);

  return { slidesPerView };
};

export default useSlidesPerView;
