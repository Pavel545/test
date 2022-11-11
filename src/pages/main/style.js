import styled from "styled-components";
export const Main = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;
export const Middle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Half = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
