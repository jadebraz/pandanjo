import React, { useState } from 'react';

import {Container, ContainerTitle, Input, Button, Message} from "./styles";


function PaymentOptions() {

    const [cep, setCep] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
  
    const maskCep = (value) => {
      const formattedValue = value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
      return formattedValue;
    };
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setCep(maskCep(value));
    };
  
    const validateCep = () => {
    
      if (cep.length === 9) {
        setMessage('CEP válido! Aguarde...');
        setIsError(false);
        setTimeout(() => {
          setMessage('Frete fixo para essa região R$ 50,83! Chega sexta 22/03.');
        }, 1500); 
      } else {
        setMessage('CEP inválido!');
        setIsError(true);
      }
    };
  
    return (
      <Container>
        <ContainerTitle>Calcular o prazo e o valor da entrega</ContainerTitle>
        <Input
          type="text"
          value={cep}
          onChange={handleInputChange}
          placeholder="00000-000"
        />
        <Button onClick={validateCep}>Calcular</Button>
        <Message isError={isError}>{message}</Message>
      </Container>
    )
  }

export default PaymentOptions;