import styled from "styled-components";

const ItemStyle = styled.li`
  all: unset;
`;

interface IProps {
  children: React.ReactNode;
}
const Item = ({ children }: IProps) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default Item;
