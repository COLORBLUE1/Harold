import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { Link } from "react-router"; // Asegúrate de que la ruta sea correcta
import { useMediaQuery } from 'react-responsive'; // Importar el hook

// Estilo para la sección general
const Section = styled("section")(({ bg }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: bg, 
    padding: "50px",
}));

// Contenedor estilo Bento para cada item
const ItemContainer = styled("div")(({ theme }) => ({
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: theme.shadows[6],
        transform: "translateY(-2px)",
    },
}));

const a = {
    fontFamily: "montserrat",
    fontSize: "15px",
    color: "#ffffff",
    textAlign: "center",
    textDecoration: "underline",
    margin: "10px 0",
    textTransform: "uppercase",
    display: "block",
};

// Etiqueta con número o título
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    boxShadow: theme.shadows[2],
    transition: "all 0.3s ease-in-out",
}));

export const Bentogaleri = ({ urlmas, bg, columns, spacing, bd, vermastext }) => {
    // Usar el hook useMediaQuery para detectar si es móvil
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // Determinar el número de columnas según el tamaño de la pantalla
    const columnCount = isMobile ? 2 : columns; // 1 columna en móviles, de lo contrario usa el valor de 'columns'

    return (
        <Section bg={bg}>
            <Box className="animate__animated animate__zoomIn animate__delay-1s" sx={{ width: isMobile ? "90%" : "60%" }}>
                <Masonry columns={columnCount} spacing={spacing}>
                    {bd.map((item, index) => (
                        <ItemContainer key={index}>
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    display: "block",
                                    width: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                }}
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.transform = "scale(1.02)")
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.transform = "scale(1)")
                                }
                            />
                        </ItemContainer>
                    ))}
                </Masonry>
                <Link style={a} to="/Arbol-material">
                    {vermastext}
                </Link>
            </Box>
        </Section>
    );
};