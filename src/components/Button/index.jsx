import React from 'react';

import Car from "./../../assets/cart.png";

import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ContainerButton, ButtonTitle, PhotoTrolley} from "./styles";

function Button(){

    const Notify = () =>{
        toast.success("Adicionado ao carrinho com sucesso!", {
            position: "top-right"
        });  
    }

    return(
        <ContainerButton className="bg-blue-500 p-3 text-white" onClick={Notify}>
            <PhotoTrolley src={Car}/>
            <ButtonTitle>Adicionar ao carrinho</ButtonTitle>
            <ToastContainer/>
        </ContainerButton>
    )
}

export default Button;