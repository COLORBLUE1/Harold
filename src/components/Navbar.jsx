

import React from 'react'
import styled from 'styled-components';
import "../assets/style/font.css";


const Container = styled.nav`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    color: white;
    height: 80px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1000;
    position: fixed;
    left: 0;
    width: 100%;
    align-items: center;
    backdrop-filter: blur(3px);

    ul {
    background: #202A9A;
    display: flex;
    padding: 15px;
    gap: 50px;
    color: #ffffff;
    border-radius: 50px;
    width: 600px;
    justify-content: center;

    li {
        a { 
    font-family: montserrat;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    }

    &:hover{
    color: #ff2020;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: underline;
    text-decoration-color: #ff2020;
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    }
    }
  }
`;


const Navbar = ({ tex3, url3, color }) => {
    return (
        <Container className="animate__animated animate__fadeInDown animate__delay-2s">
            <ul style={{ backgroundColor: color }}>
                <li><a href="/">Inicio</a></li>
                <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                <li><a href={url3}>{tex3}</a></li>
            </ul>
        </Container>
    )
}

export default Navbar