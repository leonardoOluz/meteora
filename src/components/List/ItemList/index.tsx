import styled from "styled-components";

const StyleItemList = styled.li`
  all: unset;
  a{
    text-decoration: none;
  }
`;

interface IProps extends React.LiHTMLAttributes<HTMLLIElement>{
  children: React.ReactNode;
}
const ItemList = ({ children, ...rest }: IProps) => {
  return <StyleItemList {...rest}>{children}</StyleItemList>;
};

export default ItemList;