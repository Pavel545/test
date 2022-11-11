import styled from "styled-components";
export const Box = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const BigGray = styled.div`
  background: #e3ebd3;
  width: 492px;
  height: 492px;
`;
export const BigGreen_text = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  padding: 15px;
  color: #000000;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const MiniGray = styled.div`
  background: url(${process.env.PUBLIC_URL + "/image.svg"});

  width: 241px;
  height: 241px;
  display: flex;
  align-items: flex-end;
  :hover {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  :before {

    display: none;
    content: "";
    position: absolute;
    width: 136px;
    height: 132px;
    padding:61px;
    text-align: center;
    background-image:  url(${process.env.PUBLIC_URL + "/Group.svg"});
    background-repeat: no-repeat;
    background-position: center;
    -webkit-filter: none;
    -moz-filter: none;
    -o-filter: none;
    -ms-filter: none;
    filter: none;
  }
  :hover:before {
    display:block;
    -webkit-filter: none;
    -moz-filter: none;
    -o-filter: none;
    -ms-filter: none;
    filter: none;
  }
`;
export const Link = styled.img`
  width: 61px;
  height: 61px;
  display: none;
  left: 90px;
  top: 90px;
  &:hover {
    display: block;
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
export const MiniGreen = styled.div`
  background: #e3ebd3;
  width: 241px;
  height: 241px;
  display: flex;
  align-items: flex-end;
`;
export const MiniGreen_text = styled.div`
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
`;
export const text__ = styled.div`
  &:first-of-type {
    float: left;
    margin-right: 10px;
  }
  &:last-of-type {
    float: right;
  }
`;
export const Text = styled.div`
  overflow: hidden;
  &:last-of-type {
    margin-left: 20px;
  }
  &:after {
    content: "...............................................................................................";
    display: block;
    white-space: nowrap;
    overflow: hidden;
  }
`;
