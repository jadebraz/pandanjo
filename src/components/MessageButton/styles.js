import styled from 'styled-components';

export const Container = styled.div`
    height: 105px;
    width: 370px;
    margin-top: 20px; 
`;

export const Input = styled.input`
    margin-bottom: 10px;
    height: 35px;
    width: 130px;
    border-radius: 5px;
    font-family: 'DM Sans', sans-serif;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 7px;
    border: none; 
    transition: all 0.4s ease;
    box-shadow: 0px 8px 15px #00000056;
    color: black;

    &:hover{
    transform: scale(1.01);
    background: white;
    color: #191847;
    font-weight: 400;
    box-shadow: 0px 8px 15px #00000056;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  color: black;
  border-radius: 5px;
  border: 1px solid black;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.4s ease;
  box-shadow: 0px 8px 15px #00000056;
  color: black;
  border: none;

  &:hover{
  transform: scale(1.01);
  background: #7A306C;
  color: white;
  border:none;
  font-weight: 400;
  box-shadow: 0px 8px 15px #00000056;
`;

export const Message = styled.div`
  margin-top: 3px;
  color: ${({ isError }) => (isError ? 'red' : 'green')};
`;
export const ContainerTitle = styled.div`
    font-size: 14px;
`;

