const useScroll = () => {
  const scrollIntoView = (selectIdScroll: string) => {
    const selectId = document.querySelector(`#${selectIdScroll}`);
    if (selectId) {
      selectId.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return scrollIntoView;
};

export default useScroll;
