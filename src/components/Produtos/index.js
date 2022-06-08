import { memo} from "react";
import "./styles.css"
import { useCarrinhoContext } from "../../common/context/Carrinho";




const Produto = ({TITULO, PRECO, INGREDIENTES, ID}) => {
    const {carrinho, adicionaProduto, removerProduto} = useCarrinhoContext();
    
    const pegaCarrinho = carrinho.find(itemNoCarrinho => itemNoCarrinho.ID === ID);

    return (
        <div>
            <div>
                <p>Nome: {TITULO}, Preço: {PRECO}, Ingredientes: {INGREDIENTES}</p>
                
            </div>
            <div>
                <input type="button" placeholder="+" className="input" 
                onClick={() => adicionaProduto({TITULO,PRECO,INGREDIENTES,ID})}></input>
                 {pegaCarrinho?.quantidade || 0}
                <input type="button" placeholder="-" className="input__red" 
                onClick={() => removerProduto(ID)} disabled={!pegaCarrinho} ></input>
            </div>
        </div>
        
    )
}

export default memo(Produto)