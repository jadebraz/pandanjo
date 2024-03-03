import styled from 'styled-components';


export const Container = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top:20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerLogo = styled.div`
    width: 300px;
    height: 50px; 
`

export const Logo = styled.img`
    wight: 30%; 
    height: 50px;
`

export const Sidebar = styled.div`
    width: 200px;
    height: 100%;
    margin-top: 50px;
    background-color: #333;
    position: fixed;
    box-shadow: 0px 8px 15px #00000056;
    
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-200px')};
    transition: left 0.3s ease;
`;

export const Tab = styled.div`
    padding: 20px;
    color: #fff;
    cursor: pointer;
    padding-left: 50px;
    font-size: 20px;

    &:hover {
        background-color: #555;
    }
`;

export const MenuIcon = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    color: black;
    cursor: pointer;
    font-size: 25px;
`;
export const Content = styled.div`
    margin-left: 200px;
    padding: 20px;
`;
