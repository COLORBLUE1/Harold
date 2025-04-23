import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const FooterS = styled.section`
    height: 30vh;
    background: #292929;
    
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
                <div className="flex justify-center space-x-6">
                    <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
                        <FaFacebook size={30} />
                    </a>
                    <a href="#" aria-label="YouTube" className="text-white hover:text-red-500">
                        <FaYoutube size={30} />
                    </a>
                </div>

                {/* Organización */}
                <div className="text-center md:text-right">
                    <h2 className="text-sm font-semibold mb-2">ORGANIZACIÓN SIN ÁNIMO DE LUCRO</h2>
                    <div className="flex flex-col items-center md:items-end">
                        <img src="/ruta-de-tu-imagen/logo.png" alt="Logo" className="w-14 h-14 mb-2" />
                        <p className="text-xs max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>

            </div>
        </FooterS>

    )
}
