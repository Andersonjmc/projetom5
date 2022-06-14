import React,{useState} from "react";
import { Label, Input,Legend } from "../../components/Form";
import { postBebida } from "../../utils/axios";
import bebidas from "./bebidas.module.css"

export const CadastroBebidas = ()=>{
    
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [tipo, setTipo] = useState('')
    const [sobre, setSobre] = useState('')
    const [img, setImg] = useState('')
    const [marca, setMarca] = useState('')
  
    function novaBebida() {
      postBebida(nome,preco,sobre,img,tipo,marca)
      alert('bebida cadastrada')
      } 
    
    
    return (
        <div  className={bebidas.container}>
         <div>
          <form className={bebidas.padrao}>
            <Legend legend={'Cadastro de bebidas'}/>
            <Label nome={'Nome'}/>
            <Input type={'text'} name={"nome"} onChange={(event) => setNome(event.target.value)} />
            <Label nome={'Preço da bebida'}/>
            <Input type={'text'} name={"preco"} onChange={(event) => setPreco(event.target.value)}/>
            <Label nome={'Sobre a bebida'}/>
            <Input type={'text'} name={"sobre"} onChange ={(event) => setSobre(event.target.value)}/>
            <Label nome={'Tipo da bebida'}/>
            <Input type={'text'} name={"tipo"} onChange ={(event) => setTipo(event.target.value)}/>
            <Label nome={'Url da imagem'}/>
            <Input type={'text'} name={"img"} onChange ={(event) => setImg(event.target.value)}/>
            <Label nome={'Marca'}/>
            <Input type={'text'} name={"marca"} onChange ={(event) => setMarca(event.target.value)}/>
            <button onClick={novaBebida}>Cadastre</button>  
          </form>   
          </div>
           <div>
           <aside>
              <img srcSet={img} alt="bebidas" width="300px" />
            </aside>
           </div>
        </div>
    )
}
