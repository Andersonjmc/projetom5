import {UsuarioContext} from "../../common/context/Usuario"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import React from "react";
import login from "./login.module.css"

function Login() {
  const history = useNavigate();
  const {nome,setNome, saldo, setSaldo} = useContext(UsuarioContext);
  return (
      <div className={login.container}>
        <div className={login.texto}>
              Insira o seu nome
              </div>
              <div>
                <div className={login.nome}>
                  Nome
                </div>
                <input
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
                  type="text"
                />
              </div>
              <div>
                <div class={login.nome}>
                  Saldo
                </div>
                <input
                  value={saldo}
                  onChange={(evento) => setSaldo(evento.target.value)}
                  type="number"
                  startAdornment={
                  <div position="start">
                    R$
                  </div>
                  }
                />
              </div>
              <div>
              <button onClick={() => history("/sobremesa")}>
                Avançar
              </button>
              <button onClick={() => history("/cadastro")}>
                Cadastrar Sobremesas
              </button>
              <button onClick={() => history("/cadastroBebidas")}>
                Cadastrar Bebidas
              </button>
              <button onClick={() => history("/deletaBebidas")}>
                Deletar Bebidas
              </button>
              </div>
                          
      </div>
    
  )
};

export default Login;