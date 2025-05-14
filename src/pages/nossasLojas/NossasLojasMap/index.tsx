interface NossasLojasMapProps extends React.IframeHTMLAttributes<HTMLIFrameElement>{
  map: string;
}
const NossasLojasMap = ({ map, ...rest }: NossasLojasMapProps) => {
  return (
    <iframe
      src={map}
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
