import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Section = styled.section`
  height: auto;
`;

const LandingLayout = ({ children }) => {
  return (
    <Section>
      <Navbar
        tex3="Récord Guinnes 2025"
        url3="/Record-Guinness-magdalena"
        color="#127e41"
      />
      {children}
      <Footer />
    </Section>
  );
};

export default LandingLayout;
