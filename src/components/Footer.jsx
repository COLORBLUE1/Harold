import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const FooterS = styled.section`
    height: 30vh;
    background: #292929;
    
  
        font-family: montserrat;
        color: #a5a5a5;

`;

const contenedor = {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "33% 33% 33%",
    alignItems: "center",
}

export const Footer = () => {
    return (

        <FooterS className="bg-gray-800 text-white py-8">
            <div style={contenedor} className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* Contactos */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold mb-2">Contactos</h2>
                    <p className="mb-1">+57 301 8495795</p>
                    <p>fundacioncomunitariayt@gmail.com</p>
                </div>

                {/* Redes Sociales */}
                <div className="flex justify-center space-x-20">
                    <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
                        <FaFacebook color={"white"} size={30} />
                    </a>
                    <a href="#" aria-label="YouTube" className="text-white hover:text-red-500">
                        <FaYoutube color={"red"} size={30} />
                    </a>
                </div>

                {/* Organización */}
                <div className="text-center md:text-right">
                    <h2 className="text-sm font-semibold mb-2">ORGANIZACIÓN SIN ÁNIMO DE LUCRO</h2>
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-xs max-w-xs">
                        SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON RESPONSABILIDAD SOCIAL
                        </p>
                    </div>
                </div>

            </div>
        </FooterS>

    )
}
