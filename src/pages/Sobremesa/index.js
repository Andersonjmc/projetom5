import React, { useContext } from "react"
import { useEffect, useState } from "react"
import Produto from "../../components/Produtos"
import axios from "axios"
import { UsuarioContext } from "../../common/context/Usuario"

// import {Container, Header, Lista} from './styles'


function Sobremesa() {
  const [sobremesa, setSobremesa] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:4001/sobremesa`)
    .then((response) => {
      const data = response.data.bancoSelecionado
      setSobremesa(data)
      
    })
  })
  

  
  function deletaPost(ID) {
    axios.delete(`http://localhost:4001/sobremesa/${ID}`)
    .then((response) => {
      console.log("está deletando")
      setSobremesa(sobremesa.filter(item => item.ID !== ID))
    })
    
    
  }
  
  const {nome, saldo} = useContext(UsuarioContext)
  
  return (
    <div className="App">
      <header>
        <div>
          <h2>Olá {nome}</h2>
          <h2>Seu saldo é R${saldo}</h2>
        </div>
        
        
      </header>
      <div>
        <h2>
          Sobremesas
        </h2>
          
          {sobremesa.map((item) => (
            <>
            <Produto {...item} key={item.ID} />
            <button onClick={() => deletaPost(item.ID)}>Delete</button>
            </>
            
          
          ))}
         
        
      </div>
    </div>
  )
}

export default Sobremesa;
