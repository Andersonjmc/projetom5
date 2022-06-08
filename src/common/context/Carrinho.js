import React, { createContext, useContext, useState} from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(CarrinhoContext);

    function adicionaProduto(novoProduto) {
        const contemProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.ID === novoProduto.ID)
        if(!contemProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => 
                [...carrinhoAnterior, novoProduto]
            )
        }
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
            if(itemDoCarrinho.ID === novoProduto.ID) itemDoCarrinho.quantidade += 1;
            return itemDoCarrinho;
        }))
    }

 
    return {
        carrinho,
        setCarrinho,
        adicionaProduto
        
    }
}