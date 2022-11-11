import styled from "styled-components";
export function Header() {
  const Headers = styled.header`
    width: 742px;
    height: 90px;
    left: 0px;
    top: 0px;

    background: #c4c4c4;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  `;
  return <Headers>Header</Headers>;
}
