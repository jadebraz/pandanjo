import React, { useState } from 'react';

import {ModalTitle, ModalOverlay,  ModalContent, CloseButton, InformationText} from "./styles";

function MessageReturn() {
    const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    return (
      <>
        <ModalTitle onClick={toggleModal}>Trocas e Devoluções</ModalTitle>
        {showModal && (
          <ModalOverlay onClick={toggleModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={toggleModal}>&times;</CloseButton>
              <InformationText>
                 Para mais informações sobre devolução ou troca, ligue para (11) 97240-8116!
              </InformationText>
            </ModalContent>
          </ModalOverlay>
        )}
      </>
    );
  }
  
  export default MessageReturn;