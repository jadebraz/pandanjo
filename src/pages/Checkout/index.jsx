import {React, useRef} from "react";

import Button from "./../../components/Button";


import Mulher2 from "./../../assets/imagem2.png";

import Stars from "./../../assets/estrela.png";

import bg1 from "./../../assets/principal.jpg";
import bg2 from "./../../assets/principal2.jpg";
import bg3 from "./../../assets/principal3.jpg";

import {ContainerMain, ContainerPhoto, ContainerCard, Star, ContainerOpinion, ContainerColor, ContainerColors, ColorBlue, ColorOrange, ColorPurple, ContainerSelect, ContainerMeasures, ContainerPP, ContainerP, ContainerM, ContainerG, ContainerGG, Size, Stock, ContainerPrice, Offer, Price, Price1, Price2, Line, Title, ContainerPage, NextButton, ContentContainer, PrevButton, SlidePanel} from "./styles";



function Checkout(){
  
    

    const images = [bg1, bg2, bg3]
    let imageContainerRef = useRef(null)

    const prev = () => imageContainerRef.current.scrollLeft -=250
    const next = () => imageContainerRef.current.scrollLeft +=250


    return(
        
       

        <ContainerMain>
            <ContainerPhoto> 
            <ContainerPage>
                
                <ContentContainer className='content'>
                  
                    <PrevButton className='prev' onClick={prev}></PrevButton>
                
                    
                    <SlidePanel className='slide-panel' ref={imageContainerRef}>
                        {images.map(image => {return(<img src={image}/>)})}
                    </SlidePanel>
                    
                    <NextButton className='next' onClick={next}></NextButton>
                </ContentContainer>
              
            </ContainerPage>
              
            </ContainerPhoto>

            <ContainerCard>
                <h1>Vestido Intense Manga Longa</h1>
                <p>Ref 00000000</p>
                <Star src= {Stars}/>

                <ContainerOpinion>
                    <p>Ver avaliações</p>
                </ContainerOpinion>

                <ContainerColor>
                    <h3>Selecione a cor</h3>
                </ContainerColor>

                <ContainerColors>
                   <ColorBlue>
                        <p></p>
                   </ColorBlue>

                   <ColorOrange>
                        <p></p>
                   </ColorOrange>
                
                   <ColorPurple>
                        <p></p>
                   </ColorPurple>
                </ContainerColors>

                <ContainerSelect>
                    <h3>Selecione o tamanho</h3>
                </ContainerSelect>

                <ContainerMeasures>
                    <ContainerPP>
                        <p>PP</p>
                    </ContainerPP>

                    <ContainerP>
                        <p>P</p>
                    </ContainerP>

                    <ContainerM>
                        <p>M</p>
                    </ContainerM>

                    <ContainerG>
                        <p>G</p>
                    </ContainerG>

                    <ContainerGG>
                        <p>GG</p>
                    </ContainerGG>
                </ContainerMeasures>
                
                <Size>Ver tabela de tamanhos</Size>

                <Stock>Últimos 2 produtos em estoque. Não perca essa chance!</Stock>

                <ContainerPrice>
                    <Offer>10% off</Offer>
                </ContainerPrice>

                <Price>
                    <Price1>R$ 97,20</Price1>
                    <Price2>R$ 87,48</Price2>
                </Price>

                <Line></Line>

                <Title>Parcelados em até 4x sem juros no cartão</Title>

                <Button/>
            
            </ContainerCard>
   
        </ContainerMain>

           

          
       
    )
}

export default Checkout;