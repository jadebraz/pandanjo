import styled from 'styled-components';

export const ModalTitle = styled.div`
    margin-top: 15px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    border-bottom: 1px solid black;
    padding-bottom: 4px;
    width: 345px;
    cursor: pointer;
`
export const ModalOverlay = styled.div`
    margin-top: 5px;
    width: 345px;
    height: 70px;
    border-radius: 5px;
    box-shadow: 0px 8px 15px #00000056;

    &:hover{
        
        background: white;
        color: black;
        font-weight: 400;
        box-shadow: 0px 8px 15px #00000056;
    }

`
export const ModalContent = styled.div`
`
export const CloseButton = styled.div`
    width: 345px;
    height: 5px;
    font-size: 30px;
    padding-bottom: 30px;
    padding-left: 150px; 
    color: red;
    cursor: pointer;
    border-radius: 10px;
`
export const InformationText = styled.div`  
`
