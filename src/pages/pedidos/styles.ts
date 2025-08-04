import styled from "styled-components";

export const CardPedido = styled.article`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
export const CardPedidoHeader = styled.header``;
export const CardPedidoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const CardPedidoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const CardPedidoItem = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colorsPrimary.cinza};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorsPrimary.cinza};
`;
