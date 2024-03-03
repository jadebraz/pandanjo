import React, { useState } from 'react';

import { PaymentOptionsContainer, ContainerPayment, OptionsPayment, Options } from './styles';

function PaymentSelection() {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
  
    const paymentOptions = ['Pix', 'Cartão de Débito', 'Cartão de Crédito'];
  
    const handlePaymentClick = (payment) => {
      setSelectedPayment(payment);
      setShowOptions(false);
    };
  
    return (
      <PaymentOptionsContainer>
        <ContainerPayment onClick={() => setShowOptions(!showOptions)}>
          Formas de pagamento: {selectedPayment ? selectedPayment : 'Selecione'}
        </ContainerPayment>
        {showOptions && (
          <OptionsPayment>
            {paymentOptions.map((option, index) => (
              <Options key={index} onClick={() => handlePaymentClick(option)}>
                {option}
              </Options>
            ))}
          </OptionsPayment>
        )}
      </PaymentOptionsContainer>
    );
  }
  
export default PaymentSelection;
