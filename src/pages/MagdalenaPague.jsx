import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import MagdalenaLayout from "../layouts/MagdalenaLayout";
import styled from "styled-components";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { colors } from "@mui/material";


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
    cursor: pointer;

    &:hover{
      scale: 1.1;
      color: #006d21;
      font-weight: 800;
    }
    }
  }
`;


const error = {
  color: "#ffffff",
  background: " #ff0000",
  width: "150px",
  margin: "10px",
  marginLeft: "15px",
  padding: "5px",
  borderRadius: "20px",
}
export const MagdalenaPague = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      edad: "",
      ciudad: "",
      canal19: "no",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Nombre es requerido"),
      edad: Yup.number()
        .typeError("Edad debe ser un número")
        .positive("Edad debe ser positiva")
        .integer("Edad debe ser un número entero")
        .required("Edad es requerida"),
      ciudad: Yup.string().required("Ciudad es requerida"),
      canal19: Yup.string().oneOf(["si", "no"]).required("Campo requerido"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:3001/registrar", values);
        alert("¡Registro exitoso!");
        resetForm();
        window.scrollTo(0, 0);
      } catch (err) {
        alert("Error al registrar huella.");
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <MagdalenaLayout>
      <Header>
        <img
          className="animate__animated animate__fadeInDown"
          src="https://situr.boyaca.gov.co/wp-content/uploads/2017/05/DSC_-379-1024x683.jpg"
          alt="Río Magdalena"
        />
        <h3>
          REGÍSTRATE Y DEJA TU HUELLA{" "}
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
          Récord Guinness 2025...
        </p>
      </Section>
      <SectionFormulario id="formulario">
        <form onSubmit={formik.handleSubmit} data-aos="fade-up">
          <div>
            <p>
              PONTE TU CAMISETA SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON RESPONSABILIDAD SOCIAL
              RECORD GUINNESS 2025 "EL MAGDALENA," UN RIO DE BENDICIONES
            </p>
          </div>

          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
          {formik.touched.nombre && formik.errors.nombre && <div style={error}>{formik.errors.nombre}</div>}

          <label htmlFor="edad">Edad</label>
          <input
            type="text"
            name="edad"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.edad}
          />
          {formik.touched.edad && formik.errors.edad && <div>{formik.errors.edad}</div>}

          <label htmlFor="ciudad">Lugar residencia / ciudad</label>
          <input
            type="text"
            name="ciudad"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ciudad}
          />
          {formik.touched.ciudad && formik.errors.ciudad && <div style={error}>{formik.errors.ciudad}</div>}

          <div>
            <label htmlFor="canal19">¿Registro Canal 19?</label>
            <select
              name="canal19"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.canal19}
            >
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
            {formik.touched.canal19 && formik.errors.canal19 && <div style={error}>{formik.errors.canal19}</div>}
          </div>

          <button type="submit">Registrar huella</button>
        </form>
      </SectionFormulario>
    </MagdalenaLayout>
  );
};
