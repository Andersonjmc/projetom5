import React from "react";
import { useCarrinhoContext } from "../../common/context/Carrinho";
function Carrinho() {
    const {carrinho} = useCarrinhoContext();
    const mostraCarrinho = carrinho.map(item => item)
    return (
        <div>
            <h1>Carrinho</h1>
            <h2>{mostraCarrinho.titulo}</h2>
        </div>
    )
}

export default Carrinho;