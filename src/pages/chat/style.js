import styled from "styled-components";
export const Chat = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/fon.jpg"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 651px;
  height: 757px;
  padding: 20px;
`;
export const Button = styled.button`
  background: #0f54b9;
  box-shadow: 0px 4px 6px rgba(15, 84, 185, 0.3);
  border-radius: 21px;
  width: 144px;
  height: 41px;
  color: #ffffff;
  border: none;
`;
export const Chat_smail = styled.div`
  padding: 20px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Chat_text = styled.textarea`
  width: 590px;
  height: 129px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #696969;
`;
export const Chat_area = styled.div`
  height: 517px;
  height-max: 517px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  font-size: 14px;
  line-height: 24px;
`;
