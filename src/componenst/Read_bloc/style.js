import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const MiniRead = styled.div`
  background: #FFAA87;
  width: 100%;
  height: 155px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export const MiniRead_text = styled.div`
  height: 125px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: flex-end;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
export const Mini_box = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 480px) {
    flex-direction: row;
  }
`;
export const Mini_bot = styled.div`
  display: flex;
  gap: 10px;
`;
export const Red_r = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
