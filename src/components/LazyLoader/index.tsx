import { ContainerLoad } from "./styles";

const LazyLoader = () => {
  return (
    <ContainerLoad>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </ContainerLoad>
  );
};

export default LazyLoader;
