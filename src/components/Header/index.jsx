import React, { useState } from 'react';

import Pandanjo from "./../../assets/logo-pandanjo.webp";

import { Container, Logo, ContainerLogo, MenuIcon, Sidebar, Tab} from "./styles"; 

function Header(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return(
    <Container>
        <ContainerLogo>
          <Logo src={Pandanjo}/>
        </ContainerLogo>

        <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
        <Sidebar isOpen={isOpen}>
          <Tab>Home</Tab>
          <Tab>Feminino</Tab>
          <Tab>Vestidos</Tab>
          <Tab>Novidades</Tab>
          <Tab>Login</Tab>
          <Tab>Contato</Tab>
          <Tab>Sobre</Tab>
        </Sidebar>
    </Container>
    )
}

export default Header;