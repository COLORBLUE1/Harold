import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: auto;
`;

const SobrenosotrosLayout = ({ children }) => {
  return <Section>{children}</Section>;
};

export default SobrenosotrosLayout;
