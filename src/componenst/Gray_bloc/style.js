import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const BigGray = styled.div`
  background: #a2a9b7;
  width: 492px;
  height: 492px;
  @media (max-width: 480px) {
    width: 210px;
    height: 210px;
    overflow: scroll;
  }
`;
export const BigGray_text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18.1121px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  padding-left: 25px;
  padding-top: 30px;
  padding-right: 46px;
  padding-bottom: 56px;
`;

export const MiniGray = styled.div`
  background: #a2a9b7;
  width: 241px;
  height: 241px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 480px) {
    width: 102px;
    height: 102px;
  }
`;
export const MiniGray_text = styled.div`
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

  color: #ffffff;
`;
export const Mini_box = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
