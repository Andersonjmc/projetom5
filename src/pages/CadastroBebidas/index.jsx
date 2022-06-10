import React,{useState} from "react";
import { Label, Input,Legend } from "../../components/Form";
import { postBebida } from "../../utils/axios";


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
        <div>
         <div>
          <form>
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
            <aside>
              <img src={img} alt="" srcset="" />
            </aside>
            <Label nome={'Marca'}/>
            <Input type={'text'} name={"marca"} onChange ={(event) => setMarca(event.target.value)}/>
          </form>   
           <button onClick={novaBebida}>Cadastre</button>  
         </div>
        </div>
    )
}
