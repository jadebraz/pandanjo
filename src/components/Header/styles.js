import styled from 'styled-components';


export const Container = styled.main`
    width: 100%;
    height: auto;
    //background: red;  
`

export const ContainerLogo = styled.div`
    //background: red;
    width: 100%;
    height: 40px; 
`

export const Logo = styled.img`
    margin-left: 80px;
    wight: 30%; 
    height: 50px;
`
export const ContainerNav = styled.div`
    width: 100%;
    height: 80px;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2%;
    margin-top: -50px;
    //background: #E6E6E6;

    .desktop-menu ul{
        display: flex;
    }
    .desktop-menu ul li{
        padding: 0 25px;
        list-style-type: none;
    }
    .desktop-menu ul li a{
        color: black;
        text-shadow: 0 0 5px #848790;
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;
        transition: 0.8s ease;
    }
    .desktop-menu ul li a:hover{
        color: #17203f;
        text-shadow: 0 0 5px #17203f;
        font-weight: 400;
    }
`