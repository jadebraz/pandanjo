import React, { useState } from 'react';

import { 
    InformationSentence, 
    ContainerSentenceOne, 
    SentenceOne, 
    ContentOne, 
    ContainerSentenceTwo, 
    SentenceTwo, 
    ContentTwo
} from "./styles";

function Information() {
    
    const [fraseAtual, setFraseAtual] = useState(1);
    const [tituloSelecionado, setTituloSelecionado] = useState(null); 

    function alternarFrase(titulo) {
        setFraseAtual(titulo === "Detalhes do Produto" ? 1 : 2); 
        setTituloSelecionado(titulo);
    }

    return (
        <InformationSentence>
            <ContainerSentenceOne
                style={{ color: tituloSelecionado === "Detalhes do Produto" ? '#7A306C' : '#C9C5D4' }}
                onClick={() => alternarFrase("Detalhes do Produto")}
            >
                Detalhes do Produto
            </ContainerSentenceOne>
            <ContainerSentenceTwo
                style={{ color: tituloSelecionado === "Características do Produto" ? '#7A306C' : '#C9C5D4' }}
                onClick={() => alternarFrase("Características do Produto")}
            >
                Características do Produto
            </ContainerSentenceTwo>
            {fraseAtual === 1 && (
                <SentenceOne>
                    <ContentOne>O nosso modelo de vestido Intense com certeza é a tendência do momento! Com um corte justo no corpo, ele realça suas curvas de forma leve e sensual. 
                        Feito com uma combinação de tecidos de alta qualidade, incluindo lycra, poliéster e algodão, o vestido Intense proporciona um conforto excepcional. 
                        O design sem estampas adiciona um toque minimalista e versátil ao seu look, perfeito para ocasiões casuais. Seja para um encontro descontraído ou uma tarde entre amigos, este vestido é a escolha certa para um estilo sensual e sofisticado ao mesmo tempo.
                    </ContentOne>
                </SentenceOne>
            )}
            {fraseAtual === 2 && ( 
                <SentenceTwo>
                    <ContentTwo>A cor azul pode variar em tonalidades, desde tons mais claros, como azul claro ou azul celeste, até tons mais escuros, como azul marinho. A escolha da tonalidade pode depender do seu gosto pessoal e do contexto em que pretende usar o vestido.
                         Mesmo sendo sem estampa, o vestido pode ter detalhes que adicionam interesse visual, como babados, pregas, franzidos, ou detalhes de renda ou crochê. Esses detalhes podem acrescentar charme ao vestido sem comprometer a simplicidade do seu design.
                    </ContentTwo>
                </SentenceTwo>
            )}
        </InformationSentence>
    );
}

export default Information;