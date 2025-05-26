import { NossasLojas } from "..";

interface NossasLojasMapProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  map: NossasLojas;
}
const NossasLojasMap = ({ map, ...rest }: NossasLojasMapProps) => {
  return (
    <iframe
      id={map.id}
      src={map.maps}
      width="100%"
      height="450"
      style={{ border: "0" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...rest}
    ></iframe>
  );
};

export default NossasLojasMap;
