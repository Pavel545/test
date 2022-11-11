import styled from "styled-components";

export function Mini_box(props) {
  const Mini_text = styled.div`
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

    color: ${props.color};
  `;
  const Mini = styled.div`
    background: ${props.background};
    width: 240px;
    height: 155px;
    display: flex;
    align-items: flex-end;
    @media (max-width: 480px) {
      width: 155px;
      height: 155px;
    }
  `;
  return (
    <Mini>
      <Mini_text>{props.text}</Mini_text>
    </Mini>
  );
}
