import useCheckAddress from "@/hooks/useCheckAddress";

const Summary = () => {
  useCheckAddress();
  return <div>Summary</div>;
};

export default Summary;
