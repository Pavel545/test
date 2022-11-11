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
export const Smail = styled.div`
  background: #f1f3f5;
  border-radius: 5px;
  padding: 15px;
`;
// ;
//
export const Photo = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/photo.png"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  clip-path: polygon(61% 0, 100% 44%, 90% 100%, 11% 100%, 0 39%);
  width: 47px;
  height: 47px;
  overflow : hidden
`;
export const Message_left = styled.div`
  display: flex;
  gap: 25px ;
`;
export const Message_right = styled.div`
  display: flex;
  gap: 25px ;
  justify-content: flex-end;


`;

