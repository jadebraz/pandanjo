import React from 'react';

import Pandanjo from "./../../assets/logo-pandanjo.webp";

import { Container, Logo, ContainerLogo, ContainerNav} from "./styles"; 

function Header(){
    return(
        <Container>
           
            <ContainerLogo>
                <Logo src={Pandanjo}/>
            </ContainerLogo>

            <ContainerNav>
                <div className="desktop-menu">
                    <ul>
                        <li><a href="#Inicio">Início</a></li> &gt;
                        <li><a href="#Feminino">Feminino</a></li> &gt;
                        <li><a href="#Vestidos">Vestidos</a></li> &gt;
                        <li><a href="#Contact">Ver detalhes</a></li> 
                    </ul>
                </div>
            </ContainerNav>
        </Container>
    )
}

export default Header;