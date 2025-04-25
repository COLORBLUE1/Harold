
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const FooterS = styled.footer`
  height: auto;
  background: #292929;
  font-family: montserrat;
  color: #a5a5a5;
  position: relative;
  width: 100%;
  bottom: 0;
  display: grid;
  justify-items: stretch;
  align-items: center;
`;

const Contenedor = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr); // 3 columnas en pantallas grandes
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;




export const Footer = () => {
  return (
    <FooterS>
      <Contenedor className="container mx-auto px-4 gap-8">
        {/* Contactos */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contactos</h2>
          <p className="mb-1">+57 301 8495795</p>
          <p>fundacioncomunitariayt@gmail.com</p>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.youtube.com/@el19SOYUNOCONDIOSsiempre784"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white hover:text-red-500"
          >
            <FaYoutube color={"red"} size={30} />
          </a>
        </div>

        {/* Organización */}
        <div>
          <h2 className="text-sm font-semibold mb-2">
            ORGANIZACIÓN SIN ÁNIMO DE LUCRO
          </h2>
          <p className="text-xs max-w-xs">
            SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON RESPONSABILIDAD SOCIAL
          </p>
        </div>
      </Contenedor>
    </FooterS>
  );
};