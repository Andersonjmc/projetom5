import React, { useContext } from "react"
import { useEffect, useState } from "react"
import Produto from "../../components/Produtos"
import axios from "axios"
import { UsuarioContext } from "../../common/context/Usuario"
import { useNavigate } from "react-router-dom"
import index from "./index.module.css"

// import {Container, Header, Lista} from './styles'


function Sobremesa() {
  const [sobremesa, setSobremesa] = useState([])
  const history = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/sobremesa`)
    .then((response) => {
      const data = response.data.bancoSelecionado
      setSobremesa(data)
      
    })
  })
  

  
  function deletaPost(ID) {
    axios.delete(`http://localhost:8000/sobremesa/${ID}`)
    .then((response) => {
      console.log("está deletando")
      setSobremesa(sobremesa.filter(item => item.ID !== ID))
    })
    
    
  }
  
  const {nome, saldo} = useContext(UsuarioContext)
  
  return (
    <div className={index.central}>
      <header>
        <div>
          <h2>Olá {nome}</h2>
          <h2>Seu saldo é R${saldo}</h2>
        </div>
        <button className={index.espaco} onClick={() => history ("/carrinho")}>Comprar</button>
        <button onClick={() => history(-1)}>Voltar</button>
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
