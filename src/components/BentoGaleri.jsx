import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { imageGalery } from '../services/const';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';

// Estilo para la sección general
const Section = styled('section')`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4850A8;
`;

// Contenedor estilo Bento para cada item
const ItemContainer = styled('div')(({ theme }) => ({
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: theme.shadows[6],
        transform: 'translateY(-2px)',
    },
}));

const a = {
    fontFamily: 'montserrat',
    fontSize: '15px',
    color: '#ffffff',
    textAlign: 'center',
    textDecoration: 'underline',
    margin: '10px 0',
    textTransform: 'uppercase',
    display: 'block',
}
// Etiqueta con número o título
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    boxShadow: theme.shadows[2],
    transition: 'all 0.3s ease-in-out',
}));

export const Bentogaleri = () => {
    return (
        <Section>
            <Box sx={{ width: '60%'}}>
                <Masonry columns={3} spacing={2}>
                    {imageGalery.map((item, index) => (
                        <ItemContainer key={index}>
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    display: 'block',
                                    width: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                        </ItemContainer>
                    ))}
                </Masonry>
                <Link style={a} href="/">Ver mas material</Link>
            </Box>
        </Section>
    );
};
