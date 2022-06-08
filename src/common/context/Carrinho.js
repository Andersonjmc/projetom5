import React, { createContext, useContext, useState, useEffect} from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)
    const [valorTotalCarrinho, setNovoValorTotal] = useState(0)
    return (
        <CarrinhoContext.Provider  value={{
            carrinho,
            setCarrinho,
            quantidadeProdutos,
            setQuantidadeProdutos,
            valorTotalCarrinho,
            setNovoValorTotal
            }}
        >

            {children}

        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {
        carrinho, 
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho,
        setNovoValorTotal
      } = useContext(CarrinhoContext);

    function mudarQuantidade(ID, quantidade) {
        return carrinho.map(itemDoCarrinho => {
          if(itemDoCarrinho.ID === ID) itemDoCarrinho.quantidade += quantidade;
          return itemDoCarrinho;
        });
      }

    function adicionaProduto(novoProduto) {
        const contemProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.ID === novoProduto.ID)
        if(!contemProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => 
                [...carrinhoAnterior, novoProduto]
            )

        }
        setCarrinho(mudarQuantidade(novoProduto.ID, 1))
    }

    function removerProduto(ID) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.ID === ID);
        const contemProduto = produto.quantidade === 1;
        if(contemProduto) {
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.ID !== ID));
        };
        setCarrinho(mudarQuantidade(ID, -1));
      }

      useEffect(() => {
        const {novaQuantidade, valorTotal} = carrinho.reduce((contador, produto) => ({novaQuantidade: contador.novaQuantidade + produto.quantidade, 
        valorTotal: contador.valorTotal + (produto.PRECO * produto.quantidade) }), {
            novaQuantidade: 0,
            valorTotal: 0
        });
        setQuantidadeProdutos(novaQuantidade);
        setNovoValorTotal(valorTotal)
      }, [carrinho, setQuantidadeProdutos, setNovoValorTotal]);

 
    return {
        carrinho,
        setCarrinho,
        adicionaProduto,
        removerProduto,
        quantidadeProdutos,
        setQuantidadeProdutos,
        valorTotalCarrinho
        
    }
}