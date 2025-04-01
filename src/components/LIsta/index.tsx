import React from "react";
import styled from "styled-components";

const ListaStyle = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

interface IProps {
  children: React.ReactNode;
}

const Lista = ({ children }: IProps) => {
  return <ListaStyle>{children}</ListaStyle>;
};

export default Lista;
