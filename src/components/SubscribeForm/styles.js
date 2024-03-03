import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const Phrase = styled.h1`
  margin-right: 20px;
  font-size: 27px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  font-family: 'DM Sans', sans-serif;
  border-radius: 4px;
  transition: all 0.4s ease;
  box-shadow: 0px 8px 15px #00000056;
  font-family: 'DM Sans', sans-serif;
  color: white;

  &:hover{
  transform: scale(1.01);
  background: white;
  color: #191847;
  font-weight: 400;
  box-shadow: 0px 8px 15px #00000056;
}
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #7A306C;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 10px;
  transition: all 0.4s ease;
  box-shadow: 0px 8px 15px #00000056;
  font-family: 'DM Sans', sans-serif;
  color: white;

  &:hover{
  transform: scale(1.01);
  background: white;
  color: #191847;
  font-weight: 400;
  box-shadow: 0px 8px 15px #00000056;
} 
`;
