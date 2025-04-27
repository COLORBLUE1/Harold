import React from "react";
import styled from "styled-components";

// Estilo para la sección del encabezado
const HeaderSection = styled.header`
  height: 500px;
  background: url(${(props) => props.bg}) no-repeat center center/cover;
  overflow: hidden;
  background-attachment: fixed;

  h2 {
    font-family: bebas;
    letter-spacing: 5px;
    color: white;
    text-align: center;
    padding-top: 200px;
    font-size: clamp(2.5rem, 2.054rem + 1.19vw, 3.125rem);
    margin: 0;
    backdrop-filter: blur(5px);
    height: 100%;
  }
`;

export const Header = ({ titulo, bg }) => {
  return (
    <HeaderSection bg={bg}>
      <h2 className="animate__animated animate__fadeInDown">{titulo}</h2>
    </HeaderSection>
  );
};
