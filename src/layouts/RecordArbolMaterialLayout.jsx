import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Section = styled.header`
  height: auto;
`;
const RecordArbolMaterialLayout = ({ children }) => {
  return (
    <Section>
      <Navbar
        tex3="Récord Guinnes 2025"
        url3="/Record-Guinness-magdalena"
        color="#202A9A"
      />
      {children}
      <Footer />
    </Section>
  );
};

export default RecordArbolMaterialLayout;
