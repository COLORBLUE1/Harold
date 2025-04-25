import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const Section = styled.section`
    height: auto;
    animation: identifier 2s ease-in-out forwards; 

    @keyframes identifier {
        0% {
            background: #ffffff;
        }
        100% {
            background: #072A16;
        }
    }
`;

const MagdalenaLayout = ({ children }) => {
    return (
        <Section>
            <Navbar tex3="Récord Guinnes 1999" url3="/" color="#326728" />
            {children}
            <Footer />
        </Section>
    );
}

export default MagdalenaLayout;