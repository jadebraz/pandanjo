import styled from 'styled-components';

import { motion } from 'framer-motion';

export const CarouselContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    overflow: hidden;
`;

export const CarouselInner = styled(motion.div)`
    display: flex;
`;

export const Item = styled(motion.div)`
    min-height: 300px;
    min-width: 300px;
    padding: 14px;
`;

export const Image = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none; 
    box-shadow: 0px 8px 15px #00000056;
`;

export const Name = styled.p`
    text-align: center;
`;

export const Description = styled.p`
    text-align: center;
    font-size: 14px;
`;