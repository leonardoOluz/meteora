import styled from "styled-components";

/* Summary */
export const DivSummary = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

/* Card */
export const CardContainer = styled.article`
  display: flex; /* Habilita Flexbox para o layout principal */
  flex-direction: row;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden; /* Garante que a imagem não saia dos limites */
  width: 100%; /* Ajuste a largura conforme necessário */
  max-width: 500px; /* Exemplo de largura máxima */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(
    255,
    255,
    255,
    0.4
  ); /* Fundo branco com leve transparência */
`;

export const ImageWrapper = styled.div`
  max-width: 150px;
  height: 150px;
`;

export const ContentWrapper = styled.div`
  flex: 1; /* O conteúdo restante ocupa o espaço disponível */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: flex-start; /* Alinha o texto à esquerda */
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colorsPrimary.coral};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colorsPrimary.cinzaChumbo};
  margin-bottom: 0.5rem;
`;

export const ProductQuantity = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colorsPrimary.dropDown};
`;

/* Address */
export const AddressContainer = styled.div`
  padding: 1.6rem 0;
  margin: auto 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorsPrimary.preto};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
