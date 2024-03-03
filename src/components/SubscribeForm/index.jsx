import React, { useState } from 'react';

import { Container, Phrase, Input, Button} from "./styles";

function SubscribeForm  (){
    const [email, setEmail] = useState('');
  
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email enviado:', email);
      setEmail(''); 
    };
  
    return (
      <Container>
        <Phrase>Inscreva-se para receber nossas novidades:</Phrase>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Digite o seu E-mail"
            value={email}
            onChange={handleInputChange}
            required
          />
          <Button type="submit">Inscrever-se</Button>
        </form>
      </Container>
    );
  };
  
  export default SubscribeForm;