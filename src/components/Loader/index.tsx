import styled from "styled-components";
import { keyframes } from "styled-components";

const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderStyles = styled.div`
  margin: auto;
  padding: 3rem;
  .lds-dual-ring,
  .lds-dual-ring:after {
    box-sizing: border-box;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`;

const LoaderDualRing = () => {
  return (
    <LoaderStyles>
      <div className="lds-dual-ring"></div>
    </LoaderStyles>
  );
};

export default LoaderDualRing;
