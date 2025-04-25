import React, { useEffect } from "react";
import MagdalenaLayout from "../layouts/MagdalenaLayout";
import styled from "styled-components";
import "animate.css";
const Header = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  text-transform: uppercase;
  img {
    border-radius: 15px;
    object-fit: cover;
    height: 70%;
    width: clamp(22rem, -12.286rem + 91.429vw, 70rem);
  }
  h3 {
    margin-top: 50px;
    font-family: roboto;
    color: #fff;
  }
  span a {
    text-decoration: underline;
    color: #acc864;
  }
  span a:hover {
    color: #dbff7e;
    position: relative;
    top: -5px;
  }
`;
const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  div {
    background-color: #326728;
    position: relative;
    scale: 1.1;
    width: 100%;
    height: 55%;
    transform: rotate(-15deg);

    @media (max-width: 768px) {
      height: 35%;
      scale: 1.8;
    }
  }
  p {
    text-transform: uppercase;
    font-family: roboto;
    font-size: clamp(1.25rem, 0.804rem + 1.19vw, 1.875rem);
    color: #dddddd;
    width: 50%;
    position: absolute;
    span {
      font-family: bebas;
      color: #ffffff;
    }

    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;
const SectionFormulario = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  form {
    border-radius: 30px;
    background-color: #326728;
    display: grid;
    padding: 20px; /* Added padding for better spacing */
    width: clamp(18.75rem, 14.286rem + 11.905vw, 25rem);
    color: white;
    font-family: "Roboto", sans-serif;
    label {
      font-size: 20px;
      margin: 15px 20px;
      text-align: left;
    }
    input {
      border-radius: 15px;
      border: none;
      width: 90%;
      height: 20px;
      padding: 10px;
      
    }

    div {
      display: flex;
      align-items: center;
      select {
        background-color: #ffffff;
        border: none;
        padding: 2px;
        border-radius: 10px;
        width: 50px;
        font-family: montserrat;
        font-weight: 800;
      }
    }
    button{
      border-radius: 15px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: #69cd57;
    color: white;
    font-family: 'montserrat';
    border: none;
    margin: 10px auto;
    }
  }
`;

export const MagdalenaPague = () => {
  useEffect(() => {
    // Desplazar la ventana a la parte superior de la página
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <MagdalenaLayout>
      <Header>
        <img
          className="animate__animated animate__fadeInDown "
          src="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/DSC_-379-1024x683.jpg"
          alt="Description of image"
        />
        <h3>
          REGISTRATE Y DEJA TU HUELLA{" "}
          <span>
            <a href="#formulario">Registrarse</a>
          </span>
        </h3>
      </Header>
      <Section>
        <div></div>
        <p data-aos="zoom-in">
          <span>
            PONTE TU CAMISETA DE SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON
            RESPONSABILIDAD SOCIAL
          </span>{" "}
          y estampa tu HUELLA de compromisos POS COP 16, en la propuesta de
          Récord Guinness 2025, después de 26 años, de establecer un Word Récord
          Guinness con la obra El Árbol de la PAZ pintado con 42.515 huellas sin
          repetir, una por cada participante, se quiere establecer un mayor
          ranking con una pintura del Río Magdalena.
        </p>
      </Section>
      <SectionFormulario id="formulario">
        <form action="" data-aos="fade-up">
          <div>
            {" "}
            <p>
              PONTE TU CAMISETASEMBRADORES DE AMBIENTE ,PAZ Y VIDACON
              RESPONSABILIDAD  SOCIALRECORD GUINNESS 2025"EL MAGDALENA," UN
              RIO DE BENDICIONES
            </p>
          </div>
          <label htmlFor="">Nombre</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Edad</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Lugar residencia / ciudad</label>
          <input type="text" name="" id="" />
          <div>
            <label htmlFor="">¿Registro Canal 19?</label>
            <select name="" id="">
              <option value="si">Si</option>
              <option value="no" selected>
                No
              </option>
            </select>
          </div>
          <button type="submit">Registrar huella</button>
        </form>
      </SectionFormulario>
    </MagdalenaLayout>
  );
};
