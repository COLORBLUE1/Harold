import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import AOS from 'aos';
import { Bentogaleri } from '../components/Bentogaleri';
import { Footer } from '../components/Footer';

const Header = styled.header`
        height: 100vh;
`;
const Record = styled.header`
        height: 100vh;
        background: #4850A8;

        .ContenedorRecord{
    display: flex;
    height: 100%;
    justify-items: center;
    align-items: center;
    justify-content: center;
    gap: 50px;
    div{
        width: 450px;
    h2{	    
        font-family: bebas;
        color: #fff;
        font-size: 40px;
        letter-spacing: 5px;
    }
    p{	    
        color: #fff;
        font-family: montserrat;
    }
    }
    article{
        img{
        width: 450px;
        height: 500px;
        object-fit: cover;
        border-radius: 30px;
        transition: 0.5s;
        &:hover{
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

    div{
        width: 80%;
        p{
        color: #000000ba;
        font-size: 20px;
        font-family: montserrat;
        font-weight: 600;
        letter-spacing: 5px;
        text-align: center;
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
        color: #0015FF;
        font-family: monospace;
        font-size: 60px;
       letter-spacing: 10px;
        margin-bottom: 0;
    }
    p {
        color: #8C8C8C;
        font-size: 16px;
        font-family: monospace;
       letter-spacing: 5px;
    }
   
`
const Figure = styled.figure`
    padding: 0;
    margin: 0;
    height: 100vh;
    
    div {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: url(https://conexion360.mx/wp-content/uploads/2018/09/FOTO-WEB-DIBUJANDO-UN-MA%C3%91ANA-1.jpg) no-repeat center center/cover;
        background-attachment: fixed;
    }
`;

const Landing = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Header>
                <Navbar tex3="Récord Guinnes 2025" url3="/Record-Guinness-magdalena" color="#202A9A" />
                <TituloContenedor className="container">
                    <div >
                        <h1 className="animate__animated animate__fadeInDown animate__delay-1s">FUNDACION CAMINO A TSIYON</h1>
                        <p className="animate__animated animate__fadeInUp animate__delay-1s">SEMBRADORES DE AMBIENTE, PAZ Y VIDA CON RESPONSABILIDAD SOCIAL</p>
                    </div>
                </TituloContenedor>
            </Header>
            <Figure>
                <div></div>
            </Figure>
            <Information>
                <div data-aos="fade-up"
                    data-aos-duration="1000"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odit possimus repellat tenetur a illo. Dolorem, nemo! Odio debitis expedita eius natus. Ducimus, fuga. Optio, quod! Earum nulla accusantium sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vel rem quam, incidunt ratione perferendis possimus aspernatur quidem culpa fuga. Velit ullam porro aspernatur corporis praesentium facilis voluptatum quasi error.</p></div>
            </Information>
            <Record>
                <div className="ContenedorRecord">
                    <div data-aos="fade-up"><h2>RECORD GUINEES</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                    <article ><img data-aos="fade-left" data-aos-duration="1000" src="src/assets/Archives/img/Record-arbol/Arbol.png" alt="" /></article>
                </div>
            </Record>
            <Bentogaleri titulo="record" />
         <Footer />
        </>
    )
}

export default Landing