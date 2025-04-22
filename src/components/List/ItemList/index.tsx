import styled from "styled-components";

const StyleItemList = styled.li`
  all: unset;
  a{
    text-decoration: none;
  }
`;

interface IProps {
  children: React.ReactNode;
}
const ItemList = ({ children }: IProps) => {
  return <StyleItemList>{children}</StyleItemList>;
};

export default ItemList;