import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../assets/style/font.css";
import { Link } from "react-router";

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
    background: #202a9a;
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

      &:hover {
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

  // Estilos para el menú hamburguesa
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    position: fixed;

    div {
      width: 25px;
      height: 3px;
      background-color: #ffffff;
      margin: 4px 0;
      transition: 0.4s;
    }
  }

  @media (max-width: 768px) {
    ul {
      display: none; // Ocultar el menú en pantallas pequeñas
      flex-direction: column;
      position: absolute;
      top: 100px; // Ajustar según la altura del navbar
      left: 0;
      right: 0;
      background: #202a9a;
      padding: 20px;
      border-radius: 0 0 20px 20px;
      z-index: 999;
      backdrop-filter: blur(3px);

      &.active {
        display: flex; // Mostrar el menú cuando está activo
        width: 90vw;
      }
    }
    .contenedorhambur {
      width: 100%;
      left: 20px;
      position: fixed;

      .hamburger {
        background: #30345f;
        display: flex; // Mostrar el botón hamburguesa en pantallas pequeñas
        justify-content: flex-start;
        padding: 10px;
        width: 30px;
        border-radius: 100%;
      }
    }
  }
`;

const Navbar = ({ tex3, url3, color }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar el estado del menú
  };

  return (
    <Container
      id="nav"
      className=" animate__animated animate__fadeInDown animate__delay-1s"
    >
      <div className="contenedorhambur">
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <ul
        className={menuOpen ? "active" : ""}
        style={{ backgroundColor: color }}
      >
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </li>
        <li>
          <Link to={url3}>{tex3}</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
