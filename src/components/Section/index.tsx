import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section<{ $classe?: string }>`
  margin: 0 2.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {
  children: React.ReactNode;
  classe: string;
}
const Section = ({ children, classe }: IProps) => {
  return <SectionStyle $classe={classe}>{children}</SectionStyle>;
};

export default Section;
