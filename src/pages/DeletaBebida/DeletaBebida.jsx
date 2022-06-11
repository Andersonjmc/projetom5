import React,{useState} from "react";
import { Label,Input } from "../../components/Form";
import { deleteBebida } from "../../utils/axios";
export const DeletaBebida= () =>{

    const[id, setId]= useState("");
    
    const deleta = () =>{
        deleteBebida(id)
        return alert("Bebida deletada")
    }

    return(
        <div>
            <Label  nome={"informe o id "}/>
            <Input  type={"text"} onChange={(e)=> setId(e.target.value)}/>
            <button onClick={deleta}>Deletar</button>
        </div>
    )
}