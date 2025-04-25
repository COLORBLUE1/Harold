import React from "react";
import SobrenosotrosLayout from "../layouts/SobrenosotrosLayout";
import styled from "styled-components";

const Header = styled.header`
  height: 500px;
  background: url(https://mott.pe/noticias/wp-content/uploads/2017/08/Paisajes-reflejan-paz-y-serenidad-Im%C3%A1genes-de-Mario-Visser-compressor.png)
    no-repeat center center/cover;
  overflow: hidden;
  background-attachment: fixed;

  h2 {
    font-family: bebas;
    letter-spacing: 5px;
    color: white;
    text-align: center;
    padding-top: 200px;
    font-size: 50px;
    margin: 0;
    backdrop-filter: blur(5px);
    height: 100%;
  }
`;
const Section = styled.section`
  h2 {
    font-family: bebas;
    letter-spacing: 5px;
    color: #444444;
    padding-top: 200px;
    font-size: 50px;
    margin: 0;
    backdrop-filter: blur(5px);
    height: 100%;
    width: 100%;
  }

  p {
    color: #444444;
    font-family: monospace;
    font-size: 20px;
  }

  div:first-child {
    text-align: center;
    margin-bottom: 300px;
    p {
      width: 50%;
      margin: auto;
      margin-top: 30px;
      text-align: center;
    }
  }
  div:nth-child(2) {
    text-align: left;
    position: relative;
    left: 200px;
    width: 50%;
    margin-bottom: 300px;
    p {
    }
  }
  div:nth-child(3) {
    height: 500px;
    background: url(https://mott.pe/noticias/wp-content/uploads/2017/08/Paisajes-reflejan-paz-y-serenidad-Im%C3%A1genes-de-Mario-Visser-compressor.png)
      no-repeat center center/cover;
    margin-bottom: 300px;
    width: 80%;
    margin: auto;
    border-radius: 20px;
  }
  div:last-child {
    margin-bottom: 300px;
    position: relative;
    left: 30%;
    right: 0;
    text-align: right;
    width: 50%;
    p {
      position: relative;
      right: 0;
      text-align: right;
    }
  }
`;

const Sobrenosotros = () => {
  return (
    <SobrenosotrosLayout>
      <Header>
        <h2>Sobre nosotros</h2>
      </Header>
      <Section>
        <div>
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un grupo de estudiantes de la Universidad Nacional de San
            Agustín de Arequipa, Perú. Nos dedicamos a la creación de
            aplicaciones web y móviles, así como al desarrollo de software a
            medida para empresas y particulares.
          </p>
        </div>
        <div>
          <h2>Misión</h2>
          <p>
            Proceso culturo ambiental de iniciativa ciudadana, Solidaridad
            Humana, Social y Cívica que promueve una Formación Integral y
            Cultura con Responsabilidad Social, fundamentada en principios
            éticos y morales, que propenda por procesos de Sostenibilidad
            Ambiental, La Paz y La Vida, para toda la Sociedad propiciando la
            motivación y participación de las Comunidades Educativas, Entidades
            Oficiales, el Sector Empresarial y demás Actores Sociales.
          </p>
        </div>
        <div></div>
        <div>
          <h2>Visión</h2>
          <p>
            Será un conglomerado de actores y líderes sociales, comunidades
            educativas, organizaciones sociales, ong´s, empresariales,
            sectoriales y gubernamentales, con Compromiso de Responsabilidad
            Social, basados en principios éticos y morales, son referentes
            comunitarios en lo local, regional, nacional, e internacional, en el
            fomento y fortalecimiento del desarrollo permanente de una Cultura
            de Sostenibilidad Social, Económica, Ambiental, Paz y Vida, con
            Responsabilidad Social.
          </p>
        </div>
      </Section>
    </SobrenosotrosLayout>
  );
};

export default Sobrenosotros;
