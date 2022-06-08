import React, {useState} from "react";
import axios from "axios";

function Cadastro() {

    const [post, setPost] = useState([])
    const [titulo, setTitulo] = useState('')
    const [pegaPreco, setPegaPreco] = useState(0)
    const [pegaIngrediente, setPegaIngrediente] = useState('')
  
    function criaPost() {
      axios.post('http://localhost:4001/sobremesa', {titulo: titulo, preco: pegaPreco, ingredientes: pegaIngrediente})
      .then((response) => {
        const cadastro = response.data
        setPost(cadastro.ID)
        console.log(cadastro)
      }) 
    }
    return (
        <div>
        <div>
            <h1>
                Cadastro
            </h1>
            {post}
            
        </div>
        <div>
            <input type='text' onChange={(event) => setTitulo(event.target.value)} />
            <input type='number' onChange={(event) => setPegaPreco(event.target.value)}/>
            <input type='text' onChange ={(event) => setPegaIngrediente(event.target.value)}/>
        <button onClick={criaPost}>Cadastre</button>  
        </div>
        </div>
    )
}

export default Cadastro;