import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import { Bentogaleri } from "../components/Bentogaleri";
import LandingLayout from "../layouts/LandingLayout";
import { imageGalery } from "../services/const";

const Header = styled.header`
  height: 100vh;
`;
const Record = styled.header`
  height: auto;
  background: #4850a8;

  .ContenedorRecord {
    display: flex;
    height: 100%;
    justify-items: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    div {
      width: clamp(18.75rem, 12.054rem + 17.857vw, 28.125rem);
      h2 {
        font-family: bebas;
        color: #fff;
        font-size: 40px;
        letter-spacing: 5px;
      }
      p {
        color: #fff;
        font-family: montserrat;
      }
    }
    article {
      padding: 20px;
      img {
        width: clamp(18.75rem, 12.054rem + 17.857vw, 28.125rem);
        height: 500px;
        object-fit: cover;
        border-radius: 30px;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

const Information = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80%;
    p {
      color: #000000ba;
      font-size: 20px;
      font-family: montserrat;
      font-weight: 600;
      letter-spacing: 5px;
      text-align: center;
    }
    iframe {
      margin: auto;
      width: 100%;
      height: 700px;
      border-radius: 30px;
    }
  }
`;
const TituloContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  height: 100vh;
  h1 {
    color: #0015ff;
    font-family: monospace;
    font-size: clamp(3.438rem, 3.214rem + 0.595vw, 3.75rem);
    letter-spacing: 10px;
    margin-bottom: 0;
  }
  p {
    color: #8c8c8c;
    font-size: clamp(0.625rem, 0.357rem + 0.714vw, 1rem);
    font-family: monospace;
    letter-spacing: clamp(0.188rem, 0.098rem + 0.238vw, 0.313rem);
  }
`;
const Figure = styled.figure`
  padding: 0;
  margin: 0;
  height: 100vh;

  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: url(https://conexion360.mx/wp-content/uploads/2018/09/FOTO-WEB-DIBUJANDO-UN-MA%C3%91ANA-1.jpg)
      no-repeat center center/cover;
    background-attachment: fixed;
  }
`;


const Landing = () => {
  useEffect(() => {
    // Desplazar la ventana a la parte superior de la página
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <LandingLayout>
      <Header>
        <TituloContenedor className="container">
          <div>
            <h1 className="animate__animated animate__fadeInDown ">
              FUNDACION CAMINO A TSIYON
            </h1>
            <p className="animate__animated animate__fadeInUp ">
              SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON RESPONSABILIDAD SOCIAL
            </p>
          </div>
        </TituloContenedor>
      </Header>
      <Figure>
        <div></div>
      </Figure>
      <Information>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p>
            En 1999 se alcanzó un World Record Guinness en Colombia, en un tema
            Artístico-Cultural,por el Ambiente , la Paz y la Vida, se convocó a
            las comunidades educativas y demás actores sociales en el Valle del
            Cauca a poner su huella con responsabilidad social como parte de una
            obra de arte, simbólica, denominada “El Árbol de la Paz”, inspirada
            en una ceiba centenaria de Cali del Barrio La Flora, pero lo más
            interesante de todo es que cada participante registró su nombre, su
            huella y su edad en un documento que sin querer se convirtió en un
            gran padrón ecológico, en el que celebridades como los artistas
            Hernando Tejada y Lucy Tejada dejaron sus huellas, además de las que
            plasmaron en el Árbol de la Paz.
          </p>
        </div>
      </Information>
      <Record>
        <div className="ContenedorRecord">
          <div data-aos="fade-up">
            <h2>RECORD GUINNES 1999</h2>
            <p>
              El "Árbol de la Paz" es una obra de arte simbólica que se erige
              como un testimonio del compromiso de las comunidades educativas y
              actores sociales del Valle del Cauca con la responsabilidad social
              y el bienestar del entorno. Inspirado en una majestuosa ceiba
              centenaria ubicada en el barrio La Flora de Cali, este árbol no
              solo representa la unión y la esperanza, sino que también se ha
              convertido en un símbolo de la lucha por la paz y la vida en la
              región.
            </p>
          </div>
          <article>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src="src/assets/Archives/img/Record-arbol/Arbol.png"
              alt=""
            />
          </article>
        </div>
      </Record>
      <Bentogaleri
        bd={imageGalery}
        bg="#4850a8"
        urlmas="/Arbol-material"
        columns={3}
        spacing={2}
        vermastext="Ver más material sobre el arbol de la paz"
      />
      <Information>
        <div data-aos="fade-up" data-aos-duration="1000">
          <iframe
            src="https://www.youtube.com/embed/ZCAaOCAuTwQ?si=sCwuKi3yHQfWXY6K&amp;start=78"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Information>
    </LandingLayout>
  );
};

export default Landing;
