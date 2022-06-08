import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinhoContext } from "../../common/context/Carrinho";
import { UsuarioContext } from "../../common/context/Usuario";
import Produto from "../../components/Produtos"

function Carrinho() {
    const {carrinho, valorTotalCarrinho} = useCarrinhoContext();
    const {saldo} = useContext(UsuarioContext)
    const history = useNavigate();

    function saldoCliente(saldoCliente, valorDaCompra) {
        if(saldoCliente < valorDaCompra) {
            return `Saldo indisponível: R$ ${saldoCliente - valorDaCompra}`
        } else {
            return `R$ ${saldoCliente} - R$ ${valorDaCompra} = R$ ${saldoCliente - valorDaCompra}`
        }
    }
    
    return (
        <div>
            <h1>Carrinho</h1>
            <button onClick={() => history(-1)}>Voltar</button>
            <div>
                <div>
                    <h2>Total no Carrinho: </h2>
                    <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
                </div>
            <div>
                <h2> Saldo: </h2>
                <span> R$ {saldo}</span>
            </div>
                <div>
                    <h2> Saldo Total: </h2>
                    <span>{onchange= saldoCliente(saldo,valorTotalCarrinho)}</span>
                </div>
            </div>
            
           {carrinho.map(item => (<Produto {...item} key={item.ID}/>))}

          
        </div>
        
    )
}

export default Carrinho;