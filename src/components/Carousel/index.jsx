import React, { useState, useEffect, useRef } from 'react';

import {CarouselContainer, CarouselInner, Item, Image, Description, Name} from "./styles";

import image1 from './../../assets/prd-que-vc-pode-gostar-01.png';
import image2 from './../../assets/prd-que-vc-pode-gostar-02.png';
import image3 from './../../assets/prd-que-vc-pode-gostar-03.png';
import image4 from './../../assets/prd-que-vc-pode-gostar-04.png';
import image5 from './../../assets/primeiraimagem.png';
import image6 from './../../assets/segundaimagem.png';
import image7 from './../../assets/terceiraimagem.png';
import image8 from './../../assets/quartaimagem.png';


const images = [
  { src: image1, name: 'Camisa Jeans com Bolsos', description: 'R$ 93,84' },
  { src: image2, name: 'Calça Wide Leg Destroyed', description: 'R$ 136,80' },
  { src: image3, name: 'Jaqueta de Couro', description: '118,50' },
  { src: image4, name: 'Blazer Off White', description: 'R$ 140,70' }, 
  { src: image5, name: 'Camisa Jeans com Bolsos', description: 'R$ 93,84' },
  { src: image6, name: 'Calça Wide Leg Destroyed', description: 'R$ 136,80' },
  { src: image7, name: 'Jaqueta de Couro', description: 'R$ 118,50'},
  { src: image8, name: 'Blazer Off White', description: 'R$ 140,70' },
];

function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <CarouselContainer ref={carousel}>
      <CarouselInner
        drag="x"
        dragConstraints={{ right: 10, left: -width }}
        initial={{ x: 2 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {images.map(({ src, name, description }) => (
          <Item key={src}>
            <Image src={src} alt='texto alt' />
            <Name>{name}</Name>
            <Description>{description}</Description>
          </Item>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
}

export default Carousel;