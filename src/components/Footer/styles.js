import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  width: 75%;
  padding-top: 20px;
  height: 300px;
  max-width: 1200px;
`;

export const Box = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
`;

export const Paragraph = styled.p`
  color: #666;
  margin: 5px 0;
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  margin: 5px 0;
  
  &:hover {
    text-decoration: underline;
  }
`;