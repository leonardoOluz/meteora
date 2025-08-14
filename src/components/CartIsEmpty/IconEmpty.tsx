import { thema } from "@/styles/thema";
import { GrFavorite } from "react-icons/gr";
import { IoBagHandleSharp } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";

const IconEmpty = ({
  emptyType,
}: {
  emptyType: "cart" | "order" | "favorite";
}) => {
  switch (emptyType) {
    case "cart":
      return (
        <PiShoppingCartSimple
          size={150}
          color={thema.colorsPrimary.cinzaChumbo}
        />
      );
    case "order":
      return (
        <IoBagHandleSharp size={150} color={thema.colorsPrimary.cinzaChumbo} />
      );
    case "favorite":
      return <GrFavorite size={150} color={thema.colorsPrimary.cinzaChumbo} />;
    default:
      return null;
  }
};

export default IconEmpty;
