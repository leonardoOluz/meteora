import { thema } from "@/styles/thema";
import { CatPromocao } from "@/types/componentTypes";
const objIsColor = {
  "0.15": thema.colorsPrimary.laranja,
  "0.2": thema.colorsPrimary.coral,
  "0.25": thema.colorsPrimary.verde,
  "0.3": thema.colorsPrimary.laranja,
  "0.35": thema.colorsPrimary.coral,
  "0.4": thema.colorsPrimary.verde,
  "0.45": thema.colorsPrimary.laranja,
  "0.5": thema.colorsPrimary.coral,
  "0.75": thema.colorsPrimary.verde,
  "0.9": thema.colorsPrimary.laranja,
};

const useSelectColorPromo = () => {
  const handleIsValuePromoIsColor = (valuePromo: CatPromocao) => {
    const valuePromoString = valuePromo.toString();
    return objIsColor[valuePromoString as keyof typeof objIsColor];
  };

  return {
    handleIsValuePromoIsColor,
  };
};

export default useSelectColorPromo;
