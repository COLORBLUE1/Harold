import React from "react";
import styled from "styled-components";

const Section = styled.header`
  height: 100vh;
  background: red;
`;

const SobrenosotrosLayout = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SobrenosotrosLayout;
