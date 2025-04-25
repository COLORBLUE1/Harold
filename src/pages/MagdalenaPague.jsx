import React from 'react'
import MagdalenaLayout from '../layouts/MagdalenaLayout'
import styled from 'styled-components';
import 'animate.css';
export const MagdalenaPague = () => {


  const Header = styled.header`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    text-transform: uppercase;
    img{
      border-radius: 15px;
      object-fit: cover;
      height: 70%;
      width: auto;
    }
    h3 {
      margin-top: 50px;
      font-family: roboto;
      color: #fff;
    }
    span a {
      text-decoration: underline;
      color: #ACC864;
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
    }
    p{
      font-family: roboto;
      font-size: 20px;
      color: #fff;
      width: 50%;
      position: absolute;
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

    width: 30%;
    color: white;
    font-family: 'Roboto', sans-serif;
    label{
      font-size: 20px;
      margin: 15px 20px;
      text-align: left;
    }
    input{
border-radius: 15px;
border: none;
width: 100%;
height: 30px;
    }
    }

  `;

  return (
    <MagdalenaLayout>
      <Header>
        <img className="animate__animated animate__fadeInDown " src="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/DSC_-379-1024x683.jpg" alt="Description of image" />
        <h3>REGISTRATE Y DEJA TU HUELLA <span><a href="#formulario">Registrarse</a></span></h3>
      </Header>
      <Section>
        <div>
        </div>
        <p>En 1999 se alcanzó un World Record Guinness en Colombia, en un tema Artístico-Cultural,por el
          Ambiente , la Paz y la Vida, se convocó a las comunidades educativas y demás actores sociales en
          el Valle del Cauca a poner su huella con responsabilidad social como parte de una obra de arte,
          simbólica, denominada “El Árbol de la Paz”, inspirada en una ceiba centenaria de Cali del Barrio La
          Flora, pero lo más interesante de todo es que cada participante registró su nombre, su huella y su
          edad en un documento que sin querer se convirtió en un gran padrón ecológico, en el que
          celebridades como los artistas Hernando Tejada y Lucy Tejada dejaron sus huellas, además de las
          que plasmaron en el Árbol de la Paz.</p>
      </Section>
      <SectionFormulario id="formulario">
        <form action="">
         <div> <p>PONTE TU CAMISETASEMBRADORES DE AMBIENTE ,PAZ Y VIDACON RESPONSABILIDAD  SOCIALRECORD GUINNESS 2025"EL MAGDALENA," UN RIO DE BENDICIONES</p></div>
          <label htmlFor="">Nombre</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Edad</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Lugar residencia / ciudad</label>
          <input type="text" name="" id="" />
          <label htmlFor="">¿Registro Canal 19?</label>
          <input type="checkbox" name="" id="" />
          <imput type="submit">ENVIAR</imput>
        </form>
      </SectionFormulario>
    </MagdalenaLayout>
  )
}
