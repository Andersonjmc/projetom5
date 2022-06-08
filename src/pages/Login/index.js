import {UsuarioContext} from "../../common/context/Usuario"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import React from "react";

function Login() {
  const history = useNavigate();
  const {nome,setNome, saldo, setSaldo} = useContext(UsuarioContext);
  return (
      <div>
        <div>
              Insira o seu nome
              </div>
              <div>
                <div>
                  Nome
                </div>
                <input
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
                  type="text"
                />
              </div>
              <div>
                <div>
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
              <button
                onClick={() => history("/sobremesa")}
                
                >
                Avançar
              </button>
              <button onClick={() => history("/cadastro")}>
                Cadastrar Sobremesas
              </button>
      </div>
    
  )
};

export default Login;