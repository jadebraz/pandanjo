import React from 'react';

import { Container, Box, Title, Paragraph, Link } from "./styles";

function Footer() {

    return (
      <Container>
        <Box>
          <Title>Nossas informações</Title>
          <Paragraph>©  2024. Pandanjo Design & Tecnologia</Paragraph>
          <Paragraph>ola@pandanjo.com</Paragraph>
          <Paragraph>Atibaia, SP</Paragraph>
        </Box>
        <Box>
          <Title>Sobre nós</Title>
          <Link href="#">Centro de Apoio</Link>
          <Link href="#">Suporte ao Cliente</Link>
          <Link href="#">Sobre Nós</Link>
          <Link href="#">Direitos Autorais</Link>
        </Box>
        <Box>
          <Title>Departamentos</Title>
          <Link href="#">Feminino</Link>
          <Link href="#">Calçados</Link>
          <Link href="#">Acessórios</Link>
          <Link href="#">Marcas</Link>
        </Box>
      </Container>
    );
  };
  
  export default Footer;
