import styled from 'styled-components';


export const ContainerMain = styled.main`
    display: flex;
    font-family: 'DM Sans', sans-serif;
    margin-left: 90px;
    justify-content: center;
    margin-top: 60px;
    align-items: flex-start;
    gap: 17px;
    margin-left: -50px;
    width: auto;
    height: 800px;
`
export const ContainerPhoto = styled.div`
   display: flex;

   @media only screen and (max-width: 999px) {
    margin-left: 60px;
    }

    @media only screen and (max-width: 800px) {
        margin-left: -60px;
    }
`
export const ContainerCard = styled.div`
    margin-left: 60px;
    font-size: 14px; 

    @media only screen and (max-width: 800px) {
        margin-top: 800px;
        margin-left: -500px;
    }

    p{
        font-size: 13px;
        color:#C9C5D4;
    }
}
`
export const Star = styled.img`
    width: 35%;
    height: 30%;  
    margin-top: 10px;
}
`
export const ContainerOpinion = styled.p`
    margin-top: -22px;
    font-size: 11px;
    color:#C9C5D4;
    width: 100px;
    height: 30px;  
    display: flex;
    font-family: 'DM Sans', sans-serif;
    margin-left: 135px;
    justify-content: flex-start; 
    text-decoration: underline;
    cursor: pointer;
}
`
export const ContainerColor = styled.h3`
    h3{
        margin-top: 15px;
        font-size: 17px;
        width: 50%;
        height: 50%;
    }
}
`
export const ContainerColors = styled.p`
    width: 200px;
    display: flex;
    justify-content: flex-start; 
    gap: 15px;
    margin-top: 15px;

   p{
        width: 50px;
        height: 50px;
        background: red; 
        gap: 5px;     
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0px 10px 10px #00000056;
    
        &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }
   }
}
`
export const ColorBlue = styled.p`
   p{
        width: 50px;
        height: 50px;
        background: #004386; 
        gap: 5px;      
        border-radius: 50px;
   }
}
`
export const ColorOrange = styled.p`
   p{
        width: 50px;
        height: 50px;
        background: #9B4D03; 
        gap: 5px;      
        border-radius: 50px;
   }
}
`
export const ColorPurple = styled.p`
   p{
        width: 50px;
        height: 50px;
        background: #801BC2; 
        gap: 9px;      
        border-radius: 50px;
   }
}
`
export const ContainerSelect = styled.h3`
    width: 55%;
    height: 50%;

    h3{
        margin-top: 25px;
        font-size: 17px;  
    }
}
`
export const ContainerMeasures = styled.p`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-start; 
    gap: 15px;
    margin-top: 15px;
`
export const ContainerPP = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;     
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid black;
    box-shadow: 0px 10px 10px #00000056;

    &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }

   p{
    
        width: 40px;
        height: 40px;
        color: black;
        font-size: 24px;  
        margin-left: 10px;
        margin-top: 7px;
   }
`
export const ContainerP = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;     
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid black;
    box-shadow: 0px 10px 10px #00000056;

    &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }

    p{
        
        width: 40px;
        height: 40px;
        color: black;
        font-size: 24px;  
        margin-left: 17px;
        margin-top: 7px;
    }
`
export const ContainerM = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;     
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid black;
    box-shadow: 0px 10px 10px #00000056;

    &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }

    p{
        
        width: 40px;
        height: 40px;
        color: black;
        font-size: 24px;  
        margin-left: 13px;
        margin-top: 7px;
    }
`
export const ContainerG = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;     
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid black;
    box-shadow: 0px 10px 10px #00000056;

    &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }

    p{
        
        width: 40px;
        height: 40px;
        color: black;
        font-size: 24px;  
        margin-left: 14px;
        margin-top: 7px;
    }

`
export const ContainerGG = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;     
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid black;
    box-shadow: 0px 10px 10px #00000056;

    &:hover{

        transform: scale(1.01);
        border: 1px solid #801BC2;
        box-shadow: 0px 10px 10px #00000056;
        }

    p{
        
        width: 40px;
        height: 40px;
        color: black;
        font-size: 24px;  
        margin-left: 5px;
        margin-top: 7px;
    }
`
export const Size = styled.p`
    width: 150px;
    height: 20px;
    margin-top: 17px;
    justify-content: center; 
    text-decoration: underline;
    cursor: pointer;
`
export const Stock = styled.div`
    font-size: 13px;
    color: #E30E41;
    margin-top: 14px;
`
export const ContainerPrice = styled.div`
    font-size: 13px;
    width: 55px;
    height: 18px;
    color: #E30E41;
    margin-top: 14px;
    background: #7A306C;
    border-radius: 10px;
    margin-top: 25px;
`
export const Offer = styled.p`
    font-size: 13px;
    color: #E30E41;
    margin-left: 5px;
`
export const Price = styled.div`
    height: 50px;
    width: 70%;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    //background: red;
    gap: 30px;
    margin-left: 2px;
`
export const Price1 = styled.div`
   color: #C9C5D4;
   font-size: 17px;
`
export const Price2 = styled.div`
    font-size: 35px;
`
export const Line = styled.div`
    height: 1px;
    width: 75px;
    background: #C9C5D4;
    margin-top: -25px;
`
export const Title = styled.div`
    font-size: 13px;
    height: 20px;
    width: 70%;
    margin-top: 20px;
`
export const ContainerPage = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    ::-webkit-scrollbar {
        display: none;
    }  
`
export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const SlidePanel = styled.div`
    display: flex;
    width: 27em;
    height: 40em;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    align-items: lex-end;
    box-shadow: 0px 10px 10px #00000056;
    margin-top: -50px;
    aligh-itens:center;

    img{
        scroll-snap-align: start;
        min-width: 100%;
        border-radius: 0.2em;
    }
`
export const PrevButton = styled.div`
    width: 2em;
    height: 2em;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.25s;
    border-radius: 20px;
    backgraund: #801BC2;
    font-size: 20px;
`
export const NextButton = styled.div`
    width: 2em;
    height: 2em;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.25s;
    border-radius: 20px;
    backgraund: #801BC2;
    font-size: 20px;
`
export const ArrowRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`
export const ArrowLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`
export const ContainerContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top:20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerCarousel = styled.div`
`
export const ContainerTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    margin-bottom: 40px;
`
export const ContainerFooter = styled.div`
    width: 100%;
    height: 300px;
    max-width: 1216px;
    margin: 0 auto;
    margin-top:60px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerRights = styled.div`
    width: 100%;
    max-width: 910px;
    margin: 0 auto;
    margin-top:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
    border-top: 1px solid black;

    @media only screen and (max-width: 800px) {
        margin-top: 20px;
    }
`

