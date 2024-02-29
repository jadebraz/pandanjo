import styled from 'styled-components';

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    margin-top: 15px;
    background: #7A306C;
    height: 50px;
    width: 94%;
    border-radius: 7px;
    cursor: pointer; 
    transition: all 0.4s ease;
    box-shadow: 0px 8px 15px #00000056;
    color: white;

    &:hover{
    transform: scale(1.01);
    background: white;
    color: #191847;
    font-weight: 400;
    box-shadow: 0px 8px 15px #00000056;
}
`
export const ButtonTitle = styled.div`
    margin-left: 10px;
    font-size: 20px;
`
export const PhotoTrolley = styled.img`
    height: 20px;
    width: 20px;
`